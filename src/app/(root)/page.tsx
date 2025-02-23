
import { getAllAuthors } from '@/actions/author-actions'
import { getAllCategories } from '@/actions/category-actions'
import { getAllPosts } from '@/actions/posts-actions'
import {
  FeaturedSection,
  HeroSection,
  PopularCategories,
  TopAuthors,
  TrendingSection,
} from '@/components/home/index'


export default async function HomePage() {
  const posts = await getAllPosts()
  const authors = await getAllAuthors()
  const categories = await getAllCategories()

  const featuredPost = posts[posts.length - 1];
  const trendingPosts = posts.filter(post => post.slug !== featuredPost?.slug);
  const topAuthors = authors;

  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedSection featuredPost={featuredPost} />
      <TrendingSection trendingPosts={trendingPosts} />

      <section className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <PopularCategories categories={categories} />
          <TopAuthors topAuthors={topAuthors} />
        </div>
      </section>
    </main>
  )
}

