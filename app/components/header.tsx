import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <Image
          className="block md:hidden"
          src="/logo.svg"
          alt="Logo"
          width={45}
          height={28}
        />
        <Image
          className="hidden md:block"
          src="/logo.svg"
          alt="Logo"
          width={64}
          height={40}
        />
      </a>
      <button className="header__menu-toggle">
        <Image
          className="header__menu-icon"
          src="/icon-menu.svg"
          alt="Menu"
          width={40}
          height={17}
        />
      </button>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              Home
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              New
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              Popular
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              Trending
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
