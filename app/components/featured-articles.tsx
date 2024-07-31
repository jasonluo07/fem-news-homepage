import Image from 'next/image';

export default function FeaturedArticles() {
  return (
    <section className="featured-articles">
      <ul className="featured-articles__list">
        <li className="featured-articles__item">
          <Image
            className="featured-articles__item-image"
            src="/image-retro-pcs.jpg"
            alt="Reviving Retro PCs"
            width={100}
            height={127}
          />
          <div className="featured-articles__item-content">
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
            <h3 className="featured-articles__item-title">
              The Growth of Gaming
            </h3>
            <p className="featured-articles__item-description">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
