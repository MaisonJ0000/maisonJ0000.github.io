import Head from 'next/head';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import classNames from 'classnames';

import Image from 'next/image';
import Header from './header';
import MainLayoutStyle from './mainLayout.style';

const MainLayout = ({ children, type }: { children: any, type: string }) => {
  return (
    <>
      <div className="bgWrap">
        <Image
          priority
          alt="background: playground"
          src="//static/image/playground.jpg"
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
      <div className="main-layout" css={MainLayoutStyle}>
        <Header />
        <div className={classNames('main-layout__content__wrapper', type)}>
          <div className={classNames('main-layout__content', type)}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
