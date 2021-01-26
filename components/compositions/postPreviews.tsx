import PostPreview from '../elements/postPreview';
import Post from '../../types/post';

type Props = {
  posts: Post[]
}

const PostPreviews = ({ posts }: Props) => (
  <section>
    {posts.map((post) => (
      <PostPreview
        content={post.content}
        path={post.path}
        slug={post.slug}
      />
    ))}
  </section>
);

export default PostPreviews;
