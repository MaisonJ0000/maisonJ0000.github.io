import Head from 'next/head';
import _ from 'lodash';
import MainLayout from '../../components/layouts/mainLayout';
import { encodePathIdFromPath, decodePathFromPathId } from '../../lib/post';
import { fetchPostPaths, fetchPostByPath } from '../../lib/api/post';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  content: string
}

const Post = ({ content }: Props) => (
  <MainLayout>
    <Head>
      <title>hehe</title>
    </Head>
    <article>
      <h1>ttle</h1>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  </MainLayout>
);

export default Post;

type Params = {
  params: {
    pathId: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { pathId } = params;
  const post = fetchPostByPath(decodePathFromPathId(pathId));
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const allPaths = fetchPostPaths({
    rootPagePath: '',
  });

  return {
    paths: _.map(allPaths, (path) => (
      {
        params: {
          pathId: encodePathIdFromPath(path),
        },
      }
    )),
    fallback: false,
  };
};
