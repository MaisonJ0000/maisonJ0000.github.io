import Link from 'next/link';

const Header = () => (
  <div>
    <header>
      <div className="container">
        <nav className="navbar">
          <Link href="/">
            <a className="navbar__brand">
              Maison's playground
            </a>
          </Link>
        </nav>
      </div>
    </header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/knowledges">
        <a>Knowledges</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  </div>
);

export default Header;
