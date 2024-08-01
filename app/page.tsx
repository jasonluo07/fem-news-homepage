import Header from '@/app/components/header';
import FeaturedArticles from './components/featured-articles';
import Hero from './components/hero';
import LatestNews from './components/latest-news';

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
