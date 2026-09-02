import { Link } from 'react-router-dom'
import icon from "../../assets/Hiredesklogo2.png"
import { FiArrowRight, FiMapPin } from 'react-icons/fi'
import { CATEGORIES } from '../CompanyHire'


export default function CompanyDisplay() {
  return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-center gap-5  justify-between p-10 ">
                <div>
                    <input type="text" placeholder="Search for companies..." className="w-75 md:w-150 p-4 rounded-lg  text-gray-700 dark:text-white! dark:bg-gray-800! border-2 text-xl border-gray-400 dark:border-gray-700!  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 " />
                </div>
                <p className='text-lg dark:text-white!'> <span className="font-bold">{CATEGORIES.length}</span> Companies Hiring</p>
                              
            </div>
            
            <div className="mt-0 grid grid-cols-1  lg:grid-cols-4 gap-6 w-full p-12  border-t border-gray-200 dark:border-gray-700!">
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
                        <button
                            //   onClick={handleSearch}
                            className=" flex items-center px-12 py-4 text-[#4c42dc] font-semibold text-base rounded-2xl shadow-gray-400 hover:opacity-90 transition-all "
                            >
                            View all Companies <FiArrowRight size={20}/>
                            </button>                
                        </Link>
                    ))}
            </div>        
        </>

  )
}