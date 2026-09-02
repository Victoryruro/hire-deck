import React from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const CompanyCta = () => {
  return (
    <section className="w-full  py-24 px-6 pt-32 pb-32 bg-linear-to-br from-[#f9fafb] to-[#f9fafb] dark:from-gray-900! dark:to-gray-900! text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white! leading-tight mb-5">
          Want to list your company?
        </h2>

        <p className="mt-5 text-xl text-gray-500 dark:text-white!  mx-auto leading-relaxed">
          Join 500+ companies that use HireHub to attract top talent. Create your company profile and start posting jobs today.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">


          <Link
            to="/PostAJob"
            className="flex items-center gap-2 px-6 py-3 border border-white/40 text-white bg-primary-50 text-xl font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  )
}
export default CompanyCta