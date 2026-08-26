import { useState } from 'react'
import { FiSearch, FiPlus, FiMail } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function JobAlertsSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // wire to your /api/subscribe endpoint here
    console.log('Subscribing:', email)
  }

  return (
    <section className="w-full py-16 px-6 pt-36 pb-36 bg-gray-50 dark:bg-gray-950!">
      <div className="max-w-5xl mx-auto  bg-[#0b0f1a] rounded-3xl px-8 py-20 pt-20 pb-20 text-center shadow-xl">
        {/* Eyebrow pill */}
        <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xl font-semibold px-4 py-1.5 rounded-full mb-6">
          Job Alerts
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Never Miss an Opportunity
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-400  text-2xl  mx-auto leading-relaxed">
          Get personalized job recommendations delivered straight to your inbox.
          Be the first to know when new positions match your criteria.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-5"
        >
          <div className="w-full sm:flex-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-3">
            <FiMail className="text-gray-500 shrink-0" size={22} />
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-base text-gray-200 placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-linear-to-r from-[#4c42dc] to-[#7123bb] text-white font-semibold rounded-full hover:opacity-90 transition-all whitespace-nowrap"
          >
            Get Job Alerts
          </button>
        </form>

        {/* Fine print */}
        <p className="mt-14 text-sm text-gray-500">
          Free forever. Unsubscribe anytime. No spam.
        </p>
      </div>
    </section>
  )
}

export function FinalCtaSection() {
  return (
    <section className="w-full  py-24 px-6 pt-32 pb-32 bg-linear-to-br from-[#4c42dc] to-[#7123bb] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Ready to Take the Next Step?
        </h2>

        <p className="mt-5 text-indigo-100 text-xl  mx-auto leading-relaxed">
          Whether you are searching for your dream job or building your dream team,
          HireDesk connects the right people with the right opportunities.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/jobs"
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#4c42dc] font-semibold rounded-full hover:opacity-90 transition-all"
          >
            <FiSearch size={22} />
            Find Jobs Now
          </Link>

          <Link
            to="/PostAJob"
            className="flex items-center gap-2 px-6 py-3 border border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
          >
            <FiPlus size={22} />
            Post a Job
          </Link>
        </div>
      </div>
    </section>
  )
}