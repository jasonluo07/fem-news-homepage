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
      <main className="main">
        <section className="hero">
          <Image src="/image-web-3-mobile.jpg" alt="The Bright Future of Web 3.0?" width={343} height={300} />
          <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
          <p className="hero__description">
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands
            of the people. But is it really fulfilling its promise?
          </p>
          <a href="#" className="hero-button">
            Read More
          </a>
        </section>
        <section className="latest-news"></section>
        <section className="featured-articles"></section>
      </main>
    </>
  );
}
