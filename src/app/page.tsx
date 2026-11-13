import Image, { getImageProps, type StaticImageData } from 'next/image'
import { SiteHeader } from '@/components/site-header'
import heroDesktop from '@/images/image-web-3-desktop.jpg'
import heroMobile from '@/images/image-web-3-mobile.jpg'
import gamingGrowth from '@/images/image-gaming-growth.jpg'
import retroPcs from '@/images/image-retro-pcs.jpg'
import topLaptops from '@/images/image-top-laptops.jpg'

const NEW_ARTICLES = [
  {
    title: 'Hydrogen VS Electric Cars',
    summary: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    title: 'The Downsides of AI Artistry',
    summary:
      'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    title: 'Is VC Funding Drying Up?',
    summary:
      'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
]

const TOP_ARTICLES: {
  title: string
  summary: string
  image: StaticImageData
  alt: string
}[] = [
  {
    title: 'Reviving Retro PCs',
    summary: 'What happens when old PCs are given modern upgrades?',
    image: retroPcs,
    alt: 'A retro desktop computer with a joystick, lit in pink and blue',
  },
  {
    title: 'Top 10 Laptops of 2022',
    summary: 'Our best picks for various needs and budgets.',
    image: topLaptops,
    alt: 'Close-up of a dark laptop keyboard with red backlighting',
  },
  {
    title: 'The Growth of Gaming',
    summary: 'How the pandemic has sparked fresh opportunities.',
    image: gamingGrowth,
    alt: 'A white game controller floating above an open hand',
  },
]

const HERO_ALT =
  'Colorful 3D blocks and pegs in orange, blue and red arranged like a puzzle board'

// The desktop crop (730×300) already fits the 608px-wide tablet frame in
// Figma, and from ~640px up the mobile crop (343×300) would be upscaled and
// cut off top and bottom, so the switch happens before the tablet layout.
const HERO_DESKTOP_MEDIA = '(min-width: 40rem)'

function HeroImage() {
  const {
    props: { src: desktopSrc },
  } = getImageProps({ src: heroDesktop, alt: HERO_ALT })
  const { props: mobileProps } = getImageProps({
    src: heroMobile,
    alt: HERO_ALT,
    fetchPriority: 'high',
    loading: 'eager',
  })
  // Art direction per the next/image docs (getImageProps + <picture>): the
  // browser downloads only the source whose media query matches.
  return (
    <picture>
      <source
        media={HERO_DESKTOP_MEDIA}
        srcSet={desktopSrc}
        width={heroDesktop.width}
        height={heroDesktop.height}
      />
      <img
        {...mobileProps}
        alt={HERO_ALT}
        className="h-[300px] w-full object-cover"
      />
    </picture>
  )
}

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[calc(1112px+2*2.5rem)] px-4 pt-7 pb-20 tablet:px-20 desktop:px-500 desktop:pt-1100">
      <SiteHeader />

      <main className="mt-400 grid gap-800 desktop:mt-800 desktop:grid-cols-[minmax(0,730fr)_minmax(0,350fr)] desktop:gap-x-400">
        <article aria-labelledby="hero-title" className="flex flex-col gap-300">
          <HeroImage />
          <div className="flex flex-col gap-300 desktop:grid desktop:grid-cols-2 desktop:gap-400">
            <h1
              id="hero-title"
              className="text-preset-2 text-navy-950 desktop:text-preset-1"
            >
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex flex-col items-start gap-300 desktop:gap-400">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <a
                href="#"
                className="inline-flex h-12 min-w-[185px] items-center justify-center bg-red-500 px-400 text-preset-7 text-navy-950 uppercase hover:bg-navy-950 hover:text-white focus-visible:bg-navy-950 focus-visible:text-white"
              >
                {/* Negative margin cancels the tracking after the last letter
                    so the label is optically centered (Figma: 33px each side). */}
                <span className="-mr-[0.27375rem]">Read more</span>
                <span className="sr-only">: The Bright Future of Web 3.0?</span>
              </a>
            </div>
          </div>
        </article>

        <section
          aria-labelledby="new-heading"
          className="bg-navy-950 px-[20.5px] py-[21.5px] tablet:px-[41.7px] tablet:py-400 desktop:flex desktop:flex-col desktop:justify-center desktop:px-300 desktop:py-[32.5px]"
        >
          <h2
            id="new-heading"
            className="text-preset-3 text-gold-400 tablet:text-[2.5rem]/10 desktop:text-preset-3"
          >
            New
          </h2>
          <ul className="mt-400 flex flex-col gap-400">
            {NEW_ARTICLES.map((article) => (
              <li
                key={article.title}
                className="flex flex-col gap-100 border-navy-600 not-first:border-t not-first:pt-400"
              >
                <h3 className="text-preset-4 text-white">
                  <a
                    href="#"
                    className="hover:text-gold-400 focus-visible:text-gold-400 focus-visible:outline-gold-400"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-grey-300">{article.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="top-heading" className="desktop:col-span-2">
          <h2 id="top-heading" className="sr-only">
            Top articles
          </h2>
          <ol className="flex flex-col gap-400 desktop:grid desktop:grid-cols-3">
            {TOP_ARTICLES.map((article, index) => (
              <li key={article.title} className="flex items-center gap-300">
                <div className="relative min-h-[127px] w-[100px] shrink-0 self-stretch desktop:min-h-[129px]">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-100">
                  <span
                    aria-hidden="true"
                    className="text-preset-3 text-red-500"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-preset-5 text-navy-950">
                    <a
                      href="#"
                      className="hover:text-red-500 focus-visible:text-red-500"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p>{article.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  )
}
