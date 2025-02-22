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

export const stats = [
   { label: "Active Writers", value: "2,000+" },
   { label: "Monthly Readers", value: "1M+" },
   { label: "Articles Published", value: "10,000+" },
   { label: "Countries Reached", value: "150+" },
]

export const team = [
   {
      name: "Sarah Johnson",
      role: "Editor in Chief",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Former tech journalist with over 15 years of experience in digital media.",
   },
   {
      name: "Michael Chen",
      role: "Head of Content",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Previously led content strategy at major tech publications.",
   },
   {
      name: "Emma Williams",
      role: "Community Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Passionate about building and nurturing online communities.",
   },
]

export const allCategories = [
   {
      name: "Technology",
      description: "Latest tech trends, software reviews, and digital innovations",
      count: 125,
      icon: "💻",
      featured: ["AI & Machine Learning", "Web Development", "Cybersecurity"],
   },
   {
      name: "Design",
      description: "UI/UX design principles, tools, and creative inspiration",
      count: 84,
      icon: "🎨",
      featured: ["UI Design", "Design Systems", "Typography"],
   },
   {
      name: "Development",
      description: "Programming tutorials, coding best practices, and developer tools",
      count: 216,
      icon: "⚡",
      featured: ["JavaScript", "React", "Node.js"],
   },
   {
      name: "Business",
      description: "Startup insights, entrepreneurship, and business strategies",
      count: 92,
      icon: "💼",
      featured: ["Startups", "Marketing", "Leadership"],
   },
   {
      name: "Productivity",
      description: "Time management, workflow optimization, and productivity tools",
      count: 73,
      icon: "⚡️",
      featured: ["Time Management", "Tools", "Workflows"],
   },
   {
      name: "Career",
      description: "Career development, professional growth, and workplace tips",
      count: 68,
      icon: "🎯",
      featured: ["Job Search", "Interviews", "Skills Development"],
   },
]