import NavLink from 'component/atom/Link/NavLink';
import LinkTo from 'component/atom/Link/LinkTo';
import React from 'react';
import Head from 'next/head';

interface IProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
  return (
    <>
      <Head>
        <title>{"MaisonJ's Playground"}</title>
      </Head>
      <header className="sticky top-0 bg-white z-10 grid grid-cols-3 items-end p-10 border-b pt-15 border-gray">
        <span className="font-zentokyo animate-shine text-15 sm:text-20 lg:text-30">
          <LinkTo className="px-10" href="/">
            MaisonJ&apos;s playground
          </LinkTo>
        </span>

        <nav className="flex justify-center items-end">
          <NavLink href="/posts">Posts</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
