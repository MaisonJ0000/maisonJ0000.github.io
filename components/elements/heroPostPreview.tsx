import Link from 'next/link';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import heroPostStyle from './heroPostPreview.style';
import Post from '../../types/post';

type Props = {
  post: Post
}

const HeroPostPreview = ({ post }: Props) => {
  console.log('[JONGMAN_LOG] post', post, new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  const {
    path,
    slug,
    content,
    title,
    description,
    date,
  } = post;

  return (
    <div css={heroPostStyle}>
      <p className="type">the most recent article</p>
      <Link href={path}>
        <a className="link__container hover-underline">
          <h1>{title}</h1>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
};

export default HeroPostPreview;
