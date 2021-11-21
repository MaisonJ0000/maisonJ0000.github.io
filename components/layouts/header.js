import Link from 'next/link';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import headerStyle from './header.style';
import LinkTo from '../atom/LinkTo';

const Header = () => (
  <div css={headerStyle}>
    <header>
      <div className="container">
        <nav className="navbar">
          <LinkTo href="/" className="navbar__brand">MaisonJ&apos;s playground</LinkTo>
        </nav>
      </div>
    </header>
    <nav>
      <LinkTo href="/daily">Daily Study</LinkTo>
      <LinkTo href="/knowledges">Knowledges</LinkTo>
      <LinkTo href="/about">About</LinkTo>
    </nav>
  </div>
);

export default Header;
