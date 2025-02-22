export const post = {
   id: "1",
   title: "Understanding Modern Web Development",
   excerpt: "A comprehensive guide to modern web development practices and tools",
   content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>
      
      <h2>The Evolution of Web Development</h2>
      <p>Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      
      <h3>Modern Tools and Frameworks</h3>
      <p>Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
      
      <blockquote>
        "The future of web development lies in creating seamless, performant experiences that delight users while maintaining developer productivity."
      </blockquote>
    `,
   author: {
      name: "John Doe",
      image: "/placeholder.svg?height=40&width=40",
      role: "Senior Developer",
   },
   authorId: "1", // This should match the actual author's ID
   publishedAt: "February 21, 2024",
   readingTime: "5 min read",
   coverImage: "/placeholder.svg?height=600&width=1200",
   categories: ["Web Development", "Technology"],
}

export const allPosts = Array.from({ length: 9 }, (_, i) => ({
   title: `Blog Post ${i + 1}`,
   excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
   author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
   },
   date: "Feb 21, 2024",
   image: "/placeholder.svg?height=200&width=300",
   slug: `blog-post-${i + 1}`,
   views: "2.1K",
   category: "Development",
}))

export const featuredPost = {
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

export const trendingPosts = Array.from({ length: 3 }, (_, i) => ({
   title: `Blog Post ${i + 1}`,
   excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
   author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
   },
   date: "Feb 21, 2024",
   image: "/placeholder.svg?height=200&width=300",
   slug: `blog-post-${i + 1}`,
   views: "2.1K",
   category: "Development",
}))

export const categories = [
   { name: "Technology", count: 125, icon: "💻" },
   { name: "Design", count: 84, icon: "🎨" },
   { name: "Development", count: 216, icon: "⚡" },
   { name: "Business", count: 92, icon: "💼" },
]

export const topAuthors = [
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