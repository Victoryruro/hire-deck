import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiArrowRight } from 'react-icons/fi'
import {BLOG_POSTS }from './BlogData'
const CATEGORIES = ['All', 'Career Tips', 'Hiring', 'Industry News', 'Remote Work']



const BlogDisplay = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  return (
    <div className="pt-32 pb-16 px-6 w-full mx-auto grid place-items-center ">
      {/* Search bar */}
      <div className="mx-auto mb-8">
        <div className="flex items-center gap-2 bg-white dark:bg-gray-900 border! border-gray-200 dark:border-gray-700! rounded-full px-4 py-3">
          <FiSearch className="text-gray-400 shrink-0" size={30} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent outline-none text-xl text-gray-700 dark:text-gray-200! placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-2xl font-medium transition-all ${
              activeCategory === category
                ? 'bg-linear-to-r from-[#4c42dc] to-[#7123bb] text-white'
                : 'bg-white dark:bg-gray-900! text-gray-600 dark:text-gray-300! border border-gray-200 dark:border-gray-700! hover:border-[#4c42dc] hover:text-[#4c42dc]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog grid */}
      {filteredPosts.length > 0 ? (
        <div className=" w-full lg:w-10/12 grid grid-cols-1 lg:grid-cols-3  gap-10">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-3xl">
          <p className="text-gray-500 dark:text-gray-400! ">
            No articles match your search. Try a different keyword or category.
          </p>
        </div>
      )}
    </div>
  )
}

function BlogCard({ post }) {
  return (
    <Link to={`/Blog/${post.slug}`} className="group block bg-white dark:bg-gray-900! rounded-2xl  shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="h-70 w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800!">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="w-full p-3 pt-0 text-left">
        <div className="flex items-center gap-3 mt-4 p-6">
            <span className="bg-indigo-100 dark:bg-indigo-900/40! text-[#4c42dc] dark:text-[#8f7ff5]! text-base font-semibold px-3 py-1 rounded-full">
            {post.category}
            </span>
            <span className="text-base text-gray-400">{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white! leading-snug group-hover:text-[#4c42dc] dark:group-hover:text-[#8f7ff5]! transition-colors">
            {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-xl text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
            {post.excerpt}
        </p>

        {/* Author row */}
        <div className="flex items-center gap-3 mt-5">
            <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-14 w-14 rounded-full object-cover"
            />
            <div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {post.author.name}
            </p>
            <p className="text-base text-gray-400">{post.readTime}</p>
            </div>
        </div>        
      </div>

    </Link>
  )
}
export default BlogDisplay