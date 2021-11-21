import Link from "next/link";
import { FC } from "react";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <header className="font-zentokyo text-3xl">
        <Link href="/">MaisonJ&apos;s playground</Link>
      </header>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
