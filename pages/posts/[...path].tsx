import Head from 'next/head';
import _ from 'lodash';

import MainLayout from '../../components/layouts/mainLayout';
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
    path: string[]
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { path } = params;
  const post = fetchPostByPath((path.join('/')));
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
          path: path.split('/'),
        },
      }
    )),
    fallback: false,
  };
};
