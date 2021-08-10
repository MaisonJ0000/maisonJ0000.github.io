import Head from 'next/head';
import _ from 'lodash';

import MainLayout from '../../components/layouts/mainLayout';
import { fetchPostPaths, fetchPostByPath } from '../../lib/api/post';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  title: string,
  content: string
}

const Post = ({ title, content }: Props) => (
  <MainLayout>
    <Head>
      <title>{title}</title>
    </Head>
    <article>
      <h1>{title}</h1>
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
      ...post,
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
