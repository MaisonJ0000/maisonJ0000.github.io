import Head from 'next/head';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import classNames from 'classnames';

import Image from 'next/image';
import Header from './header';
import MainLayoutStyle, { DarkMainLayoutTheme, LightMainLayoutTheme } from './mainLayout.style';

const MainLayout = ({ children, type }: { children: any, type?: string }) => {
  const theme = LightMainLayoutTheme;
  // if (type === 'post') {
  //   theme = LightMainLayoutTheme;
  // }

  const myLoader = ({ src, width, quality }: any) => {
    return `/static/image/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className="bgWrap" />
      <Head>
        <title>{'MaisonJ\'s Playground'}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Wire+One&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
        <link href="/static/css/styles.css" rel="stylesheet" />
      </Head>
      <div className="main-layout" css={MainLayoutStyle(theme)}>
        <Header />
        <main className="p-16">
          {children}
        </main>
      </div>
    </>
  );
};

MainLayout.defaultProps = {
  type: null,
};

export default MainLayout;
