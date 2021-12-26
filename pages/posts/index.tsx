import MainLayout from 'component/template/mainLayout';
import { fetchPosts } from 'lib/api/post';
import { IPost } from 'src/common/type';
import PostPreview from 'component/molecular/post/PostPreview';

interface IPostsProps {
  posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <MainLayout>
      <section className="my-20 mx-auto w-2/3 divide-y divide-gray-300">
        {posts.map(post => (
          <PostPreview key={post.path} post={post} />
        ))}
      </section>
    </MainLayout>
  );
}

export const getStaticProps = async () => {
  const posts = fetchPosts({
    rootPagePath: '',
  });

  return {
    props: {
      posts,
    },
  };
};
