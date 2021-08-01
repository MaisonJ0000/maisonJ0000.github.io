import Link from 'next/link';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import headerStyle from './header.style';
import PostPreviews from '../compositions/postPreviews';

const Header = () => (
  <div css={headerStyle}>
    <header>
      {/* <PostPreviews /> */}
      <div className="container">
        <nav className="navbar">
          <Link href="/">
            <a className="navbar__brand">
              MaisonJ&apos;s playground
            </a>
          </Link>
        </nav>
      </div>
    </header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/knowledges">
        <a>Knowledges</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </div>
);

export default Header;
