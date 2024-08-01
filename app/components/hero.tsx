import Image from 'next/image';

export default function Hero() {
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
