import Head from 'next/head';
import _ from 'lodash';

import { css } from '@emotion/react';
import MainLayout from '../../components/layouts/mainLayout';
import { fetchPostPaths, fetchPostByPath } from '../../lib/api/post';
import markdownToMdast from '../../lib/markdownToMdast';
import MarkdownRenderer from '../../components/atom/MarkdownRenderer';
/** @jsxImportSource @emotion/react */
import postStyle from './post.style';

type Props = {
  title: string,
  contentMdast: any
}

const Post = ({ title, contentMdast }: Props) => {
  return (
    <MainLayout type="post">
      <div css={postStyle}>
        <Head>
          <title>{title}</title>
        </Head>
        <article>
          <h1>{title}</h1>
          <MarkdownRenderer mdast={contentMdast} />
        </article>
      </div>
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
