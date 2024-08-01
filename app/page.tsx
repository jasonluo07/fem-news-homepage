import Image from 'next/image';

export default function Home() {
  return (
    <div className="content-container">
      <Header />
      <main className="main">
        <section className="main-top">
          <Hero />
          <LatestNews />
        </section>
        <FeaturedArticles />
      </main>
    </div>
  );
}

function Header() {
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

function Hero() {
  return (
    <section className="hero">
      <Image
        className="hero__image-mobile"
        src="/image-web-3-mobile.jpg"
        alt="The Bright Future of Web 3.0?"
        width={343}
        height={300}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <Image
        className="hero__image-desktop"
        src="/image-web-3-desktop.jpg"
        alt="The Bright Future of Web 3.0?"
        width={730}
        height={300}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div className="hero__content">
        <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
        <div className="hero__description">
          <p className="hero__text">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a className="hero__button" href="#">
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    <section className="latest-news">
      <h2 className="latest-news__title">New</h2>
      <ul className="latest-news__list">
        <li className="latest-news__item">
          <h3 className="latest-news__item-title">
            <a className="latest-news__item-link" href="#">
              Hydrogen VS Electric Cars
            </a>
          </h3>
          <p className="latest-news__item-description">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </li>
        <li className="latest-news__item">
          <h3 className="latest-news__item-title">
            <a className="latest-news__item-link" href="#">
              The Downsides of AI Artistry
            </a>
          </h3>
          <p className="latest-news__item-description">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </li>
        <li className="latest-news__item">
          <h3 className="latest-news__item-title">
            <a className="latest-news__item-link" href="#">
              Is VC Funding Drying Up?
            </a>
          </h3>
          <p className="latest-news__item-description">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </li>
      </ul>
    </section>
  );
}

function FeaturedArticles() {
  return (
    <section className="featured-articles">
      <ol className="featured-articles__list">
        <li className="featured-articles__item">
          <Image
            className="featured-articles__item-image"
            src="/image-retro-pcs.jpg"
            alt="Reviving Retro PCs"
            width={100}
            height={127}
          />
          <div className="featured-articles__item-content">
            <div className="articles-list__item-number">01</div>
            <h3 className="featured-articles__item-title">
              Reviving Retro PCs
            </h3>
            <p className="featured-articles__item-description">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </li>
        <li className="featured-articles__item">
          <Image
            className="featured-articles__item-image"
            src="/image-top-laptops.jpg"
            alt="Top 10 Laptops of 2022"
            width={100}
            height={127}
          />
          <div className="featured-articles__item-content">
            <div className="articles-list__item-number">01</div>
            <h3 className="featured-articles__item-title">
              Top 10 Laptops of 2022
            </h3>
            <p className="featured-articles__item-description">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </li>
        <li className="featured-articles__item">
          <Image
            className="featured-articles__item-image"
            src="/image-gaming-growth.jpg"
            alt="The Growth of Gaming"
            width={100}
            height={127}
          />
          <div className="featured-articles__item-content">
            <div className="articles-list__item-number">01</div>
            <h3 className="featured-articles__item-title">
              The Growth of Gaming
            </h3>
            <p className="featured-articles__item-description">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
