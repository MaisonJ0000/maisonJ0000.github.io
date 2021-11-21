import PostPreview from '../elements/postPreview';
import Post from '../../types/post';

type Props = {
  posts: Post[]
}

const PostPreviews = ({ posts }: Props) => (
  <section>
    {posts.map((post) => (
      <PostPreview
        key={post.path}
        {...post}
      />
    ))}
  </section>
);

export default PostPreviews;
