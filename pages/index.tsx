import axios from 'axios';
import Link from 'next/link';
import MainLayout from '../components/layouts/mainLayout';
import { fetchLastPost } from '../lib/api/post';
import Post from '../types/post';
import PostPreviews from '../components/compositions/postPreviews';
import HeroPostPreview from '../components/elements/heroPostPreview';

type Props = {
  lastPost: Post
}

const Home = ({ lastPost }: Props) => {
  console.log('[JONGMAN_LOG] lastPost', lastPost, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  return (
    <MainLayout>
      <HeroPostPreview
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
