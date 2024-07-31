import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="header">
        <a href="#" className="header__logo">
          <Image src="/logo.svg" alt="Logo" width={45} height={28} />
        </a>
        <button className="header__menu-toggle">
          <Image src="/icon-menu.svg" alt="Menu" width={40} height={17} />
        </button>
        <nav className="header__navigation">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                New
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Popular
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Trending
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#" className="header__nav-link">
                Categories
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
