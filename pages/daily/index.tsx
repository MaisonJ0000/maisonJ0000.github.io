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

  const sortedPosts = _(allPosts)
    .filter((r) => {
      _.assign(r, { isDraft: r.type === 'draft' });
      return !!r.date;
    })
    .orderBy('date', 'desc')
    .value();

  return {
    props: {
      sortedPosts,
    },
  };
};
