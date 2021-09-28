import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import _ from 'lodash';
import PostType from '../../types/post';

const fetchPostPaths = (opts: { rootPagePath: string }): string[] => {
  const { rootPagePath = '' } = opts;

  const postsDirectory = path.join(process.cwd(), `pages/${rootPagePath}`);
  const fileNames = fs.readdirSync(postsDirectory);

  const allPaths = _(fileNames)
    .map((fileName) => {
      const isDirectory = !_.includes(fileName, '.');
      if (isDirectory) {
        return fetchPostPaths({
          rootPagePath: path.join(rootPagePath, fileName),
        });
      }
      const isMd = _.endsWith(fileName, '.md');
      if (!isMd) return null;

      const slug = fileName.replace(/\.md$/, '');
      const postPath = path.join(rootPagePath, slug);
      return postPath;
    })
    .flattenDeep()
    .compact()
    .value();

  return allPaths;
};

const fetchPostByPath = (_path: string): PostType => {
  const fullPath = path.join(process.cwd(), `pages/${_path}.md`);
  const slug = _(_path).split('/').last();
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const {
    title, description, date, type = null,
  } = data;

  return {
    path: _path,
    slug,
    content,
    title,
    description,
    date,
    type,
  };
};

const fetchPosts = (opts: { rootPagePath: string }) => {
  const paths = fetchPostPaths(opts);
  const posts = _.map(paths, (_path) => fetchPostByPath(_path));
  return posts;
};

const fetchLastPost = (opts: { rootPagePath: string }) => {
  const posts = fetchPosts(opts);
  const sortedPosts = _.orderBy(posts, 'date', 'desc');

  return _.head(sortedPosts);
};

export {
  fetchPostPaths,
  fetchPosts,
  fetchPostByPath,
  fetchLastPost,
};
