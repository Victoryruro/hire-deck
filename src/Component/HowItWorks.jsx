import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { motion } from 'motion/react'

const STEPS = {
  seekers: [
    {
      number: '01',
      title: 'Create Your Profile',
      description:
        'Build a standout profile showcasing your skills, experience, and career goals. Upload your resume and let employers find you.',
    },
    {
      number: '02',
      title: 'Discover Opportunities',
      description:
        'Search and filter thousands of jobs by role, location, salary, and more. Get personalized recommendations based on your profile.',
    },
    {
      number: '03',
      title: 'Apply & Get Hired',
      description:
        'Apply with one click, track your applications, and connect directly with hiring managers. Land your dream job faster.',
    },
  ],
  employers: [
    {
      number: '01',
      title: 'Post Your Job',
      description:
        'Create a detailed job listing in minutes. Set your requirements, salary range, and company details to attract the right candidates.',
    },
    {
      number: '02',
      title: 'Review Candidates',
      description:
        'Browse qualified applicants, filter by skills and experience, and shortlist the candidates that best fit your team.',
    },
    {
      number: '03',
      title: 'Hire & Onboard',
      description:
        'Connect directly with candidates, schedule interviews, and bring the right talent onto your team faster than ever.',
    },
  ],
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('seekers')
  const steps = STEPS[activeTab]

  return (
    <section className="w-full py-16 px-6 bg-gray-50 dark:bg-gray-950!">
      <div className="p-8 mx-auto text-center">
        {/* Eyebrow pill */}
        <span className="inline-block bg-indigo-100 text-xl dark:bg-indigo-900/40! text-[#4c42dc] dark:text-[#8f7ff5]!  font-semibold px-4 py-1.5 rounded-full mb-4">
          How It Works
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white! mb-7">
          Your Path to Success
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-gray-500 dark:text-gray-400!  mx-auto text-lg">
          Whether you are looking for your next role or your next hire, HireDesk
          makes the process simple and effective.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-full p-1 mt-8">
          <button
            onClick={() => setActiveTab('seekers')}
            className={`px-5 py-2 rounded-full text-xl font-semibold transition-all ${
              activeTab === 'seekers'
                ? 'bg-linear-to-r from-[#4c42dc] to-[#4c42dc] text-white'
                : 'text-gray-600 dark:text-gray-300!'
            }`}
          >
            For Job Seekers
          </button>
          <button
            onClick={() => setActiveTab('employers')}
            className={`px-5 py-2 rounded-full text-xl font-semibold transition-all ${
              activeTab === 'employers'
                ? 'bg-linear-to-r from-[#4c42dc] to-[#4c42dc] text-white'
                : 'text-gray-600 dark:text-gray-300!'
            }`}
          >
            For Employers
          </button>
        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              
              <motion.div 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                className="text-left bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-2xl  h-full p-12">
                <span className="inline-flex items-center justify-center h-15 w-15 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-[#4c42dc] dark:text-[#8f7ff5]! font-bold text-2xl">
                  {step.number}
                </span>

                <h3 className="mt-4 font-bold text-4xl text-gray-900 dark:text-white! mb-3.5">
                  {step.title}
                </h3>

                <p className="mt-2 text-2xl text-gray-500 dark:text-gray-400! leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow connector - hidden on mobile, hidden after last card */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 text-gray-500 dark:text-gray-600">
                  <FiArrowRight size={35} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}