import React from 'react'
import { Link } from 'react-router-dom'

export function PricingCta() {
  return (
    <section className="w-full  py-24 px-6 pt-32 pb-32 bg-linear-to-br from-[#4c42dc] to-[#7123bb] dark:to-gray-900! text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Not Sure Which Plan Is Right?
        </h2>

        <p className="mt-5 text-indigo-100 text-xl  mx-auto leading-relaxed">
          Talk to our team and we will help you find the perfect fit for your hiring needs.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/jobs"
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#4c42dc] font-semibold rounded-full hover:opacity-90 transition-all"
          >
            
            Talk to Sales
          </Link>

          <Link
            to="/PostAJob"
            className="flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            
            Compare Features
          </Link>
        </div>
      </div>
    </section>
  )
}