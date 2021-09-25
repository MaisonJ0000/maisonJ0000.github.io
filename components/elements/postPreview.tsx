import dayjs from 'dayjs';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import postPreviewStyle from './postPreview.style';
import LinkTo from '../atom/LinkTo';

type Props = {
  content: string
  path: string
  slug: string
  date: number
  title: string
}

const PostPreview = ({
  content, path, slug, date, title,
}: Props) => {
  return (
    <div css={postPreviewStyle}>
      <span className="date">{dayjs(`${date}`).format('YYYY-MM-DD')}</span>
      <span className="title">
        <LinkTo as={`/posts/${path}`} href="/posts/[...path]">{title}</LinkTo>
      </span>
    </div>
  );
};

export default PostPreview;
