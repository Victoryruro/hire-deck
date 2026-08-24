import { Link } from 'react-router-dom'
import icon from "../assets/Hiredesklogo2.png"
import { FiArrowRight, FiMapPin } from 'react-icons/fi'


const CATEGORIES = [
  {
    name: 'TechFlow Inc.',
    slug:'Software Development',
    count: 24,
    location:"San Francisco , CA",
    icon: icon,
 
  },
  {
    name: 'DesignCraft Studio',
    slug:'Creative Agency',
    count: 12,
    location:"New York,NY",
    icon: icon,
  },
  {
    name: 'DataVault Analytics',
    slug:'Data &  Analytics',
    count: 18,
    location:"Seattle, WA",
    icon: icon,
  },
  {
    name: 'CloudPeak Systems',
    slug:'Cloud Infastructure',
    count: 31,
    location:"Austin , TX",
    icon: icon,
  },
  {
    name: 'GrowthLab Marketing',
    slug:'Digital',
    count: 9,
    location:"Remote",
    icon: icon,
  },
  {
    name: 'FinEdge Capital',
    slug:'Financial Services',
    count: 15,
    location:"Chicago",
    icon: icon,
  },
]

export default function CompanyHire() {
  return (
    <section className="w-full py-16 px-6 bg-[#ffffff] dark:bg-[#030712]/90!">
      <div className=" mx-auto text-center p-20">
        {/* Eyebrow pill */}
        <span className="inline-block bg-indigo-100 dark:bg-indigo-900/40! text-[#4c42dc] dark:text-[#8f7ff5]! text-2xl font-semibold px-4 py-1.5 rounded-full mb-4">
          Top Employers
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white! mb-10">
          Companies Hiring Now
        </h2>

        {/* Subtext */}
        <p className="mt-10 text-gray-500 dark:text-gray-400! text-center  mx-auto">
          Join industry-leading organizations that are actively looking for talent like you.
        </p>

        {/* Category grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {CATEGORIES.map(({ name, slug,location, count, icon, bg, }) => (
            <Link
              key={slug}
              to={`/jobs?category=${encodeURIComponent(slug)}`}
              className="group w-full text-center flex flex-col items-center justify-center bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-2xl p-12 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`p-2 w-34 rounded-xl  dark:bg-[#6ee494]! `}>
                <img src={icon} alt="icon" width={150} />
              </div>

              <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white! group-hover:text-[#4c42dc] dark:group-hover:text-[#8f7ff5]! transition-colors">
                {name}
              </h3>
              <h5 className="mt-2 text-xl font-extralight text-gray-900 dark:text-white! group-hover:text-[#4c42dc] dark:group-hover:text-[#8f7ff5]! transition-colors">
                {slug}
              </h5>
              <span className="flex items-center gap-1 mt-5 mb-7 dark:text-white!">
                    <FiMapPin size={14} />
                    {location}
              </span>

              <p className="mt-3 px-8 text-sm text-[#0b3331] bg-[#6ee494]/40 dark:bg-[#6ee494]! p-3 rounded-2xl ">
                {count.toLocaleString()} open positions
              </p>
            </Link>
          ))}
        </div>
        <div className='flex items-center flex-col pb-18 mt-8 '>
            <button
            //   onClick={handleSearch}
            className=" flex items-center px-12 py-4 text-[#4c42dc] font-semibold text-2xl rounded-2xl shadow-gray-400 hover:opacity-90 transition-all "
            >
            View all Companies <FiArrowRight size={20}/>
            </button>                
        </div>


      </div>
    </section>
  )
}