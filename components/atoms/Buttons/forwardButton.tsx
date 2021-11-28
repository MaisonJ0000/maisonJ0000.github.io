import Link from "next/link";

interface IProps {
  href: string;
  children?: React.ReactNode;
}

export default function ForwardButton({ href, children }: IProps) {
  return (
    <span className="mx-5">
      <Link href={href}>
        <a className="px-3 py-2 text-xl font-bold">{children}</a>
      </Link>
    </span>
  );
}
