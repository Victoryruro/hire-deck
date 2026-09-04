import { useParams, useNavigate, Link } from 'react-router-dom'
import { FiArrowLeft, FiCalendar } from 'react-icons/fi'
import { BLOG_POSTS } from './BlogData'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-32 pb-16 px-6  mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white!">
          Article not found
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400!">
          The article you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/Blog"
          className="inline-flex items-center gap-2 mt-6 text-[#4c42dc] dark:text-[#8f7ff5]! font-semibold"
        >
          <FiArrowLeft size={30} />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <section className="w-full grid place-content-center-safe mx-auto dark:bg-gray-900!">
        <article className="pt-32 pb-16 px-6 max-w-6xl mx-auto dark:bg-gray-900!">
        {/* Back button */}
        <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-lg font-semibold text-gray-500 dark:text-gray-400! hover:text-[#4c42dc] dark:hover:text-[#8f7ff5]! transition-colors mb-8"
        >
            <FiArrowLeft size={30} />
            Back to Blog
        </button>

        {/* Category + date */}
        <div className="flex items-center gap-3">
            <span className="bg-indigo-100 dark:bg-indigo-900/40! text-[#4c42dc] dark:text-[#8f7ff5]! text-lg font-semibold px-3 py-1 rounded-full">
            {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-lg text-gray-400">
            <FiCalendar size={14} />
            {post.date}
            </span>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white! leading-tight">
            {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mt-6">
            <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-14 w-14 rounded-full object-cover"
            />
            <div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white!">
                {post.author.name}
            </p>
            <p className="text-lg text-gray-400">{post.readTime}</p>
            </div>
        </div>

        {/* Featured image */}
        <div className="mt-8 h-72 md:h-100 w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800!">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="mt-10 text-xl leading-10 prose prose-gray dark:prose-invert max-w-none">
            {post.content
            .trim()
            .split('\n\n')
            .map((paragraph, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300! leading-relaxed mb-5">
                {paragraph.trim()}
                </p>
            ))}
        </div>

        {/* Bottom back link */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700!">
            <Link
            to="/Blog"
            className="flex items-center gap-2 text-lg font-semibold text-[#4c42dc] dark:text-[#8f7ff5]! hover:opacity-80 transition-opacity"
            >
            <FiArrowLeft size={30} />
            Back to all articles
            </Link>
        </div>
        </article>    
    </section>    

  )
}