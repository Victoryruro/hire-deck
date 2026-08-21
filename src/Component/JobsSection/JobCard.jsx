import { FiMapPin, FiDollarSign, FiArrowRight } from 'react-icons/fi'

function JobCard({
  logo,
  title,
  company,
  location,
  salaryRange,
  postedAgo,
  tags = [],
  type,
  featured = false,
  applyLink = '#',
}) {
  return (
    <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg transition-shadow">
      {/* Featured badge */}
      {featured && (
        <span className="absolute -top-3 right-6 bg-linear-to-r from-[#4c42dc] to-[#7123bb] text-white text-xs font-semibold px-3 py-1 rounded-full">
          Featured
        </span>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {/* Logo */}
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-12 w-12 rounded-xl object-cover shrink-0"
          />

          <div>
            <h3 className="text-[#4c42dc] font-bold text-lg leading-tight">
              {title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
              {company}
            </p>
          </div>
        </div>

        {/* Type pill */}
        {type && (
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
              type === 'Full-time'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                : type === 'Remote'
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
            }`}
          >
            {type}
          </span>
        )}
      </div>

      {/* Meta row: location, salary, posted */}
      <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <FiMapPin size={14} />
          {location}
        </span>
        <span className="flex items-center gap-1">
          <FiDollarSign size={14} />
          {salaryRange}
        </span>
        <span className="text-gray-400 dark:text-gray-500">{postedAgo}</span>
      </div>

      {/* Bottom row: tags + apply */}
      <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        
        <a  href={applyLink}
          className="flex items-center gap-1 text-[#4c42dc] dark:text-[#8f7ff5] font-semibold text-sm hover:gap-2 transition-all"
        >
          Apply Now <FiArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

export default JobCard