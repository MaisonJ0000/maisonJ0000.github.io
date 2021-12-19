import Link from "next/link";
import classnames from "classnames";
import React, { HTMLAttributes } from "react";
import { useRouter } from "next/router";

interface IProps extends HTMLAttributes<HTMLElement> {
  href: string;
  children?: React.ReactNode;
}

export default function NavLink({ href, children }: IProps) {
  const { asPath } = useRouter();
  return (
    <span className="mx-0 sm:mx-5">
      <Link href={href}>
        <a
          className={classnames(
            "px-3 text-sm sm:text-xl font-montserrat animate-inverted-hover-b",
            { "border-b-2 border-secondary !text-black": asPath === href }
          )}
        >
          {children}
        </a>
      </Link>
    </span>
  );
}
