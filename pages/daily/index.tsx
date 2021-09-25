import _ from 'lodash';
import { fetchPosts } from '../../lib/api/post';
import PostPreviews from '../../components/compositions/postPreviews';
import Post from '../../types/post';
import MainLayout from '../../components/layouts/mainLayout';

type Props = {
  sortedPosts: Post[]
}

const DailyStudy = ({ sortedPosts }: Props) => {
  return (
    <MainLayout>
      <PostPreviews
        posts={sortedPosts}
      />
    </MainLayout>
  );
};

export default DailyStudy;

export const getStaticProps = async () => {
  const allPosts = fetchPosts({
    rootPagePath: 'knowledges',
  });

  // @ts-ignore
  const sortedPosts = _.filter(_.orderBy(allPosts, 'date', 'desc'), (r) => r.type === 'draft');

  return {
    props: {
      sortedPosts,
    },
  };
};
