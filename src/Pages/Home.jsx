import React from 'react'
import JobSearchFilters from '../Component/JobSearch'
import StatsBar from '../Component/DotForHome'
import Stat from '../Component/Stats'
import JobsDisplay from '../Component/JobsSection/JobDisplay'
import ExploreByCategory from '../Component/Category'

const jobDesc = ['React Developer', 'Product Manager', 'UX Designer', 'Data Scientist',  'DevOps Engineer', "Marketing Lead"]


const Home = () => {
  return (
    <>
        <div className="w-full pb-30  flex flex-col flex-nowrap justify-start mt-14 pt-63 items-center bg-linear-to-br from-[#4c42dc] to-[#7123bb] to-99% dark:bg-linear-to-br dark:from-[#4c42dc] dark:to-[#101828]! dark:to-99%  transition-colors duration-300">
          <StatsBar persons={2500} companies={340} />
          <div className="flex flex-col items-center justify-center mb-5 ">
            <h1 className="text-8xl font-bold text-white text-center mt-10 mb-10 tracking-tight">Find Your Dream Job</h1>
            <p className="text-3xl font-semibold text-[#e0e7ff] text-center mt-4">Search thousands of opportunities from top companies worldwide.<br />Your next career move starts here.</p>
          </div>
          <JobSearchFilters/> 
          <div className="mt-10 flex flex-row items-center flex-wrap justify-center gap-2 text-gray-400 text-xl font-bold">
            Popular:
            {jobDesc.map((desc) => (
              <p key={desc} className="bg-[#765fcf] dark:bg-primary-500! text-white dark:text-gray-300 border border-gray-300 dark:border-gray-600! rounded-full px-5 py-2 text-[16px] font-medium cursor-pointer hover:bg-[#4c42dc] hover:text-white transition-colors duration-300">
                {desc}
              </p>
            ))}
          </div>

        </div>
        <Stat/>
        <hr className=' border-gray-300 dark:border-black!' />
        <JobsDisplay/>
        <ExploreByCategory/>
    </>
  )
}

export default Home