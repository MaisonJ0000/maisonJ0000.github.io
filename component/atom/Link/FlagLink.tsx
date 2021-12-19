import React, { HTMLAttributes } from 'react';
import classnames from 'classnames';

interface IProps extends HTMLAttributes<HTMLElement> {
  href: string;
  outerColorClass?: string;
  innerColorClass?: string;
}

export default function FlagLink({
  children,
  outerColorClass = 'bg-primary',
  innerColorClass = 'bg-secondary',
}: IProps) {
  return (
    <span>
      <span
        className={classnames(
          'rounded-r-full ease-out duration-100 hover:pr-4 hover:py-2',
          outerColorClass,
        )}
      >
        <a
          className={classnames(
            'rounded-r-full pl-2 pr-3 py-1 text-[10px] sm:text-sm text-lime-100 hover:text-rose-700',
            innerColorClass,
          )}
          href="https://github.com/MaisonJ0000/maisonj0000.github.io"
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </a>
      </span>
    </span>
  );
}
