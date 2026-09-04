import { Link } from 'react-router-dom'
import { FiCode, FiFeather, FiBarChart2, FiHeart,FiBookOpen } from 'react-icons/fi'
import { HiOutlineSpeakerphone,  } from 'react-icons/hi'


const CATEGORIES = [
  {
    name: 'Technology',
    slug: 'Technology',
    count: 840,
    icon: FiCode,
    bg: 'bg-indigo-100 dark:bg-indigo-900/40',
    iconColor: 'text-indigo-600 dark:text-indigo-300',
  },
  {
    name: 'Design',
    slug: 'Design',
    count: 320,
    icon: FiFeather,
    bg: 'bg-pink-100 dark:bg-pink-900/40',
    iconColor: 'text-pink-600 dark:text-pink-300',
  },
  {
    name: 'Marketing',
    slug: 'Marketing',
    count: 275,
    icon: HiOutlineSpeakerphone,
    bg: 'bg-orange-100 dark:bg-orange-900/40',
    iconColor: 'text-orange-600 dark:text-orange-300',
  },
  {
    name: 'Finance',
    slug: 'Finance',
    count: 190,
    icon: FiBarChart2,
    bg: 'bg-green-100 dark:bg-green-900/40',
    iconColor: 'text-green-600 dark:text-green-300',
  },
  {
    name: 'Healthcare',
    slug: 'Healthcare',
    count: 210,
    icon: FiHeart,
    bg: 'bg-[#ffe2e2] dark:bg-[#ffe2e2]/40',
    iconColor: 'text-[#ec3139] dark:text-[#ec3139]',
  },
  {
    name: 'Education',
    slug: 'Education',
    count: 165,
    icon: FiBarChart2,
    bg: 'bg-[#dbeafe] dark:bg-[#dbeafe]/40',
    iconColor: 'text-[#2166fc] dark:text-[#2166fc]',
  },
    {
    name: 'Sales',
    slug: 'Sales',
    count: 230,
    icon: FiBookOpen,
    bg: 'bg-[#fef9c2] dark:bg-[#fef9c2]/40',
    iconColor: 'text-[#d08700] dark:text-[#d08700]',
  },
    {
    name: 'Engineering',
    slug: 'Engineering',
    count: 310,
    icon: FiBarChart2,
    bg: 'bg-[#f3e8ff] dark:bg-[#f3e8ff]/40',
    iconColor: 'text-[#a126fb] dark:text-[#a126fb]',
  },
]

export default function ExploreByCategory() {
  return (
    <section className="w-full py-16 px-6 bg-gray-50 dark:bg-gray-950!">
      <div className=" mx-auto text-center p-6 md:p-20">
        {/* Eyebrow pill */}
        <span className="inline-block bg-indigo-100 dark:bg-indigo-900/40! text-[#4c42dc] dark:text-[#8f7ff5]! text-2xl font-semibold px-4 py-1.5 rounded-full mb-4">
          Browse Categories
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white! mb-10">
          Explore by Category
        </h2>

        {/* Subtext */}
        <p className="mt-10 text-gray-500 dark:text-gray-400! text-center  mx-auto">
          Find opportunities across the most in-demand fields and industries.
        </p>

        {/* Category grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CATEGORIES.map(({ name, slug, count, icon: Icon, bg, iconColor }) => (
            <Link
              key={slug}
              to={`/Job`}
              className="group w-full text-left bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-2xl p-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${bg}`}>
                <Icon size={35} className={iconColor} />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white! group-hover:text-[#4c42dc] dark:group-hover:text-[#8f7ff5]! transition-colors">
                {name}
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {count.toLocaleString()} open positions
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}