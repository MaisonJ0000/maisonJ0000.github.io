import dayjs from 'dayjs';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import postPreviewStyle from './postPreview.style';
import LinkTo from '../atom/LinkTo';

type Props = {
  path: string
  date: number
  title: string
  // eslint-disable-next-line react/require-default-props
  isDraft?: boolean
}

const PostPreview = ({
  path, date, title, isDraft,
}: Props) => {
  return (
    <div css={postPreviewStyle}>
      <span className="date">{dayjs(`${date}`).format('YYYY-MM-DD')}</span>
      {isDraft
      && <span className="draft">draft</span>}
      <span className="title">
        <LinkTo as={`/posts/${path}`} href="/posts/[...path]">{title}</LinkTo>
      </span>
    </div>
  );
};

export default PostPreview;
