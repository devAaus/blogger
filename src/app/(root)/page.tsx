
import {
  HeroSection,
  FeaturedSection,
  TrendingSection,
  PopularCategories,
  TopAuthors
} from '@/components/home/index'

export default function HomePage() {
  const featuredPost = {
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping modern web development...",
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Lead Developer",
    },
    date: "Feb 21, 2024",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-web-development",
    readTime: "5 min read",
    category: "Technology",
  }

  const trendingPosts = [
    {
      title: "Getting Started with Next.js",
      excerpt: "A beginner's guide to building applications with Next.js...",
      author: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Feb 20, 2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "getting-started-nextjs",
      views: "2.1K",
      category: "Development",
    },
    {
      title: "Understanding TypeScript",
      excerpt: "Deep dive into TypeScript features and best practices...",
      author: {
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Feb 19, 2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "understanding-typescript",
      views: "1.8K",
      category: "Programming",
    },
    {
      title: "CSS Tips and Tricks",
      excerpt: "Advanced CSS techniques for modern web design...",
      author: {
        name: "Sarah Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Feb 18, 2024",
      image: "/placeholder.svg?height=200&width=300",
      slug: "css-tips-tricks",
      views: "1.5K",
      category: "Design",
    },
  ]

  const categories = [
    { name: "Technology", count: 125, icon: "💻" },
    { name: "Design", count: 84, icon: "🎨" },
    { name: "Development", count: 216, icon: "⚡" },
    { name: "Business", count: 92, icon: "💼" },
  ]

  const topAuthors = [
    {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Lead Developer",
      posts: 45,
      followers: "12.5K",
    },
    {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "UX Designer",
      posts: 38,
      followers: "8.2K",
    },
    {
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Tech Writer",
      posts: 32,
      followers: "6.7K",
    },
  ]

  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedSection featuredPost={featuredPost} />
      <TrendingSection trendingPosts={trendingPosts} />

      <section className=" px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <PopularCategories categories={categories} />
          <TopAuthors topAuthors={topAuthors} />
        </div>
      </section>
    </main>
  )
}

