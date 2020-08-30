import Link from 'next/link';

const Knowledges = () => (
  <div>
    <nav>
      <Link href="/knowledges/html">
        <a>html</a>
      </Link>
      <Link href="/knowledges/nextjs">
        <a>nextJs</a>
      </Link>
    </nav>
  </div>
);

export default Knowledges;
