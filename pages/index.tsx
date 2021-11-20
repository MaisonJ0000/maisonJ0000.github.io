import MainLayout from '../components/layouts/mainLayout';
import { fetchLastPost } from '../lib/api/post';
import Post from '../types/post';
import PostsPreview from '../components/elements/heroPostPreview';

type Props = {
  lastPost: Post
}

const Home = ({ lastPost }: Props) => {
  return (
    <MainLayout>
      <PostsPreview
        post={lastPost}
      />
    </MainLayout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const lastPost = fetchLastPost({
    rootPagePath: '_posts',
  });

  return {
    props: {
      lastPost,
    },
  };
};
