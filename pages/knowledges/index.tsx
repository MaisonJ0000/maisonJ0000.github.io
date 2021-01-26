import Link from 'next/link';
import { fetchPosts } from '../../lib/api/post';
import PostPreviews from '../../components/compositions/postPreviews';
import Post from '../../types/post';

type Props = {
  allPosts: Post[]
}

const Knowledges = ({ allPosts }: Props) => (
  <div>
    <nav>
      <Link href="/knowledges/html">
        {/* TODO: a 대신에 버튼으로 만들고 스타일링 */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>html</a>
      </Link>
      <Link href="/knowledges/nextjs">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>nextJs</a>
      </Link>
    </nav>

    <PostPreviews
      posts={allPosts}
    />
  </div>
);

export default Knowledges;

export const getStaticProps = async () => {
  const allPosts = fetchPosts({
    rootPagePath: 'knowledges',
  });

  return {
    props: {
      allPosts,
    },
  };
};
