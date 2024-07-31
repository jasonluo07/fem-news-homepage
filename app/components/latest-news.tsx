export default function LatestNews() {
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
