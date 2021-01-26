import Link from 'next/link';
import { encodePathIdFromPath } from '../../lib/post';

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
      <Link as={`/posts/${encodePathIdFromPath(path)}`} href="/posts/[pathId]">
        <a className="hover:underline">{content.slice(0, 20)}</a>
      </Link>
    </h3>
  </div>
);

export default PostPreview;
