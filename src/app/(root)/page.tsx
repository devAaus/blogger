
import {
  HeroSection,
} from '@/components/home/index'


export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      {/* <FeaturedSection featuredPost={featuredPost} />
      <TrendingSection trendingPosts={trendingPosts} />

      <section className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <PopularCategories categories={categories} />
          <TopAuthors topAuthors={topAuthors} />
        </div>
      </section> */}
    </main>
  )
}

