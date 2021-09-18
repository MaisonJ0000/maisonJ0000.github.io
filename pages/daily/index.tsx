import Link from 'next/link';
import { fetchPosts } from '../../lib/api/post';
import PostPreviews from '../../components/compositions/postPreviews';
import Post from '../../types/post';
import MainLayout from '../../components/layouts/mainLayout';

type Props = {
  allPosts: Post[]
}

const DailyStudy = ({ allPosts }: Props) => {
  return (
    <MainLayout>
      <PostPreviews
        posts={allPosts}
      />
    </MainLayout>
  );
};

export default DailyStudy;

export const getStaticProps = async () => {
  const allPosts = fetchPosts({
    rootPagePath: 'daily',
  });

  return {
    props: {
      allPosts,
    },
  };
};
