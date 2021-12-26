import { IPost } from 'src/common/type';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import LinkTo from 'component/atom/Link/LinkTo';

interface IProps {
  post: IPost;
}

export default function PostPreview({ post }: IProps) {
  const { path, title, date } = post;
  return (
    <LinkTo
      as={`/posts/${path}`}
      href="/posts/[...path]"
      className="group p-20 flex justify-between hover:bg-green-600/10"
    >
      <span className="group-hover:underline">{title}</span>
      <span>{format(parse(date, 'yyyyMMdd', new Date()), 'yyyy-MM-dd')}</span>
    </LinkTo>
  );
}
