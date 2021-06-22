import Link from 'next/link';
import { jsx } from '@emotion/core'; /** @jsx jsx */
import headerStyle from './header.style';
import PostPreviews from '../compositions/postPreviews';

const Header = () => (
  <div css={headerStyle}>
    <header>
      <PostPreviews posts={} />
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
