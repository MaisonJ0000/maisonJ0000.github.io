import Head from 'next/head';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import classNames from 'classnames';

import Image from 'next/image';
import Header from './header';
import MainLayoutStyle, { DarkMainLayoutTheme, LightMainLayoutTheme } from './mainLayout.style';

const MainLayout = ({ children, type }: { children: any, type?: string }) => {
  const theme = DarkMainLayoutTheme;
  // if (type === 'post') {
  //   theme = LightMainLayoutTheme;
  // }

  const myLoader = ({ src, width, quality }: any) => {
    return `/static/image/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <div className="bgWrap">
        <Image
          priority
          loader={myLoader}
          alt="background: playground"
          src="playground.jpg"
          layout="fill"
          objectFit="cover"
          quality={30}
        />
      </div>
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
        <div className={classNames('main-layout__content__wrapper', type)}>
          {children}
        </div>
      </div>
    </>
  );
};

MainLayout.defaultProps = {
  type: null,
};

export default MainLayout;
