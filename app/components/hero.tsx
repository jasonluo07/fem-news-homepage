import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src="/image-web-3-mobile.jpg"
        alt="The Bright Future of Web 3.0?"
        width={343}
        height={300}
      />
      <h1 className="hero__title">The Bright Future of Web 3.0?</h1>
      <p className="hero__description">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <a className="hero__button" href="#">
        Read More
      </a>
    </section>
  );
}
