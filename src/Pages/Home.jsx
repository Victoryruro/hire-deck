import React from 'react'
import JobSearchFilters from '../Component/JobSearch'


const Home = () => {
  return (
    <>
        <div className="w-full h-screen  flex flex-col flex-nowrap justify-start mt-14 pt-63 items-center bg-linear-to-br from-[#4c42dc] to-[#7123bb] to-99% dark:bg-linear-to-br dark:from-[#4c42dc] dark:to-[#101828]! dark:to-99%  transition-colors duration-300">
          <div className="flex flex-col items-center justify-center mb-5 ">
            <h1 className="text-8xl font-bold text-white text-center mt-10 mb-10 tracking-tight">Find Your Dream Job</h1>
            <p className="text-3xl font-semibold text-[#e0e7ff] text-center mt-4">Search thousands of opportunities from top companies worldwide.<br />Your next career move starts here.</p>
          </div>
          <JobSearchFilters/> 
        </div>
    </>
  )
}

export default Home