import FeaturedArticles from '@/app/components/featured-articles';
import Header from '@/app/components/header';
import Hero from '@/app/components/hero';
import LatestNews from '@/app/components/latest-news';

export default function Home() {
  return (
    <div className="mx-4 mb-8 mt-7">
      {/* <Header /> */}
      <main className="main">
        {/* <Hero /> */}
        <LatestNews />
        {/* <FeaturedArticles /> */}
      </main>
    </div>
  );
}
