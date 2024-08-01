import Header from '@/app/components/header';
import FeaturedArticles from './components/featured-articles';
import Hero from './components/hero';
import LatestNews from './components/latest-news';

export default function Home() {
  return (
    <div className="mx-4 mb-20 mt-7 max-w-[1110px] md:mx-auto">
      <Header />
      <main className="main">
        <div className="md:flex md:gap-x-[30px] md:mb-[72px]">
          <Hero />
          <LatestNews />
        </div>
        <FeaturedArticles />
      </main>
    </div>
  );
}
