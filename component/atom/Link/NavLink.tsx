import Link from 'next/link';
import classnames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { useRouter } from 'next/router';

interface IProps extends HTMLAttributes<HTMLElement> {
  href: string;
  children?: React.ReactNode;
}

export default function NavLink({ href, children }: IProps) {
  const { asPath } = useRouter();
  return (
    <span
      className={`mx-10 mb-0 lg:mb-6 border-b-2 leading-none ${
        asPath === href ? 'border-gray-800' : 'border-transparent'
      }`}
    >
      <Link href={href}>
        <a
          className={classnames(
            'px-10 font-montserrat text-16 lg:text-20 leading-none animate-inverted-hover-b',
            { '!bg-black': asPath === href },
          )}
        >
          {children}
        </a>
      </Link>
    </span>
  );
}
