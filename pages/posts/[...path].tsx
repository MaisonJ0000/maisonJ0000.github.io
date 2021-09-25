import Head from 'next/head';
import _ from 'lodash';

import MainLayout from '../../components/layouts/mainLayout';
import { fetchPostPaths, fetchPostByPath } from '../../lib/api/post';
import markdownToMdast from '../../lib/markdownToMdast';
import MarkdownRenderer from '../../components/atom/MarkdownRenderer';

type Props = {
  title: string,
  contentMdast: any
}

const Post = ({ title, contentMdast }: Props) => {
  return (
    <MainLayout type="post">
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <MarkdownRenderer mdast={contentMdast} />
      </article>
    </MainLayout>
  );
};

export default Post;

type Params = {
  params: {
    path: string[]
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const { path } = params;
  const post = fetchPostByPath((path.join('/')));
  const contentMdast = markdownToMdast(post.content || '');

  return {
    props: {
      ...post,
      contentMdast,
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
