import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import _ from 'lodash';

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

const fetchPostByPath = (_path: string) => {
  const fullPath = path.join(process.cwd(), `pages/${_path}.md`);
  const slug = _(_path).split('/').last();
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);

  return {
    path: _path,
    content,
    slug,
  };
};

const fetchPosts = (opts: { rootPagePath: string }) => {
  const paths = fetchPostPaths(opts);
  const posts = _.map(paths, (_path) => fetchPostByPath(_path));
  return posts;
};

export {
  fetchPostPaths,
  fetchPosts,
  fetchPostByPath,
};
