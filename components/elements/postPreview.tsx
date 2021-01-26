import Link from 'next/link';

type Props = {
  content: string
  path: string
  slug: string
}

const PostPreview = ({ content, path, slug }: Props) => (
  <div>
    <h3>
      <Link href={path}>
        <p>{slug}</p>
      </Link>
      <Link as={`/posts/${path}`} href="/posts/[...path]">
        <a className="hover:underline">{content.slice(0, 20)}</a>
      </Link>
    </h3>
  </div>
);

export default PostPreview;
