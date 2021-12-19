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
      <header className="flex border-b border-gray pt-2">
        <span className="font-zentokyo text-sm sm:text-2xl animate-shine">
          <LinkTo className="px-1 sm:px-2 lg:px-10" href="/">
            MaisonJ&apos;s playground
          </LinkTo>
        </span>

        <nav className="flex items-end ml-0 sm:ml-10">
          <NavLink href="/posts">Posts</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
