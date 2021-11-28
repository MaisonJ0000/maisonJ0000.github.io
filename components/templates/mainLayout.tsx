import ForwardButton from "components/atoms/Buttons/forwardButton";
import Link from "next/link";

interface IProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
  return (
    <>
      <header className="font-zentokyo text-3xl">
        <span className="animate-shine">
          <Link href="/">MaisonJ&apos;s playground</Link>
        </span>
      </header>
      <nav className="flex justify-center">
        <ForwardButton href="/posts">Posts</ForwardButton>
        <ForwardButton href="/about">About</ForwardButton>
      </nav>
      <main>{children}</main>
    </>
  );
}
