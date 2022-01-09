import NavLink from 'component/atom/Link/NavLink';
import LinkTo from 'component/atom/Link/LinkTo';
import React, { useState } from 'react';
import Head from 'next/head';
import MenuSvg from 'component/atom/Svg/MenuSvg';

interface IProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
  const [isMenuSpanned, setIsMenuSpanned] = useState(false);
  return (
    <>
      <Head>
        <title>{"MaisonJ's Playground"}</title>
      </Head>
      <header className="sticky top-0 bg-white z-10 flex sm:grid items-center sm:items-end grid-cols-2 sm:grid-cols-3 p-10 border-b pt-15 border-gray">
        <span className="font-zentokyo animate-shine text-30 flex-1">
          <LinkTo className="px-10" href="/">
            MaisonJ&apos;s playground
          </LinkTo>
        </span>

        <span className="flex w-20 sm:hidden justify-self-end">
          <MenuSvg />
        </span>
        <nav className="hidden sm:flex justify-center sm:items-end">
          <NavLink href="/posts">Posts</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
