import Link from 'next/link';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import heroPostStyle from './heroPostPreview.style';
import Post from '../../types/post';

type Props = {
  post: Post
}

const HeroPostPreview = ({ post }: Props) => {
  const {
    path,
    title,
    description,
  } = post;

  return (
    <div css={heroPostStyle}>
      <span className="new-badge">NEW</span>
      <Link as={`/posts/${path}`} href="/posts/[...path]">
        <a className="link__container ">
          <h1>{title}</h1>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default HeroPostPreview;
