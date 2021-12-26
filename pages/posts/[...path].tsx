import MainLayout from 'component/template/mainLayout';
import { fetchPostByPath, fetchPostPaths } from 'lib/api/post';

interface IPostProps {
  content: string;
}

export default function Post(props: IPostProps) {
  const { content } = props;
  return (
    <MainLayout>
      <div>{content}</div>
    </MainLayout>
  );
}

interface IParams {
  params: {
    path: string[];
  };
}

export const getStaticProps = async ({ params }: IParams) => {
  const { path } = params;
  const post = fetchPostByPath(path.join('/'));
  // const contentMdast = markdownToMdast(post.content || '');

  return {
    props: {
      ...post,
    },
  };
};

export const getStaticPaths = async () => {
  const postPaths = fetchPostPaths({
    rootPagePath: '',
  });

  return {
    paths: postPaths.map(postPath => ({
      params: {
        path: postPath.split('/'),
      },
    })),
    fallback: false,
  };
};
