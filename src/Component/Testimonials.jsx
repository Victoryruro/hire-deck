import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const TESTIMONIALS = [
  {
    rating: 5,
    quote:
      'I found my dream job as a Senior Engineer at a top startup within two weeks of joining HireDesk. The search filters and job alerts made the process incredibly efficient.',
    name: 'Sarah Chen',
    role: 'Senior Software Engineer',
  },
  {
    rating: 3,
    quote:
      'As a hiring manager, HireDesk has transformed our recruitment process. We reduced our time-to-hire by 60% and the quality of candidates is exceptional.',
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering, TechFlow',
  },
  {
    rating: 4,
    quote:
      'The platform made my career transition from finance to tech seamless. The personalized recommendations were spot-on and helped me land a role I love.',
    name: 'Aisha Patel',
    role: 'Product Manager',
  },
  {
    rating: 5,
    quote:
      'Posting a role took minutes, and within days we had a shortlist of genuinely qualified candidates. HireDesk cut our hiring cycle in half.',
    name: 'James Okafor',
    role: 'Head of Talent, Nimbus',
  },
  {
    rating: 5,
    quote:
      'I was skeptical about job boards until HireDesk. The alerts matched my exact skill set and I landed three interviews in my first week.',
    name: 'Elena Kovacs',
    role: 'UX Researcher',
  },
  {
    rating: 5,
    quote:
      'Clean, fast, and actually useful filters. I found a remote contract role that fit perfectly around my schedule.',
    name: 'David Kim',
    role: 'Freelance Developer',
  },
]

const VISIBLE_DESKTOP = 3

export default function Testimonials() {
  const maxIndex = TESTIMONIALS.length - VISIBLE_DESKTOP
  const [index, setIndex] = useState(0)

  const goPrev = () => setIndex((i) => Math.max(i - 1, 0))
  const goNext = () => setIndex((i) => Math.min(i + 1, maxIndex))

  return (
    <section className="w-full py-16 px-6 bg-white dark:bg-gray-950!">
      <div className="p-10 mx-auto text-center">
        <span className="inline-block bg-indigo-100 dark:bg-indigo-900/40! text-[#4c42dc] dark:text-[#8f7ff5]! text-lg font-semibold px-4 py-1.5 rounded-full mb-4">
          Testimonials
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white! mb-3">
          Success Stories
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400!  mx-auto text-xl">
          Hear from job seekers and employers who found their perfect match on HireDesk.
        </p>

        {/* Carousel */}
        <div className="relative mt-12">
          {/* Prev arrow */}
          <button
            onClick={goPrev}
            disabled={index === 0}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800! shadow-md text-gray-500 dark:text-gray-300! hover:text-[#4c42dc] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <FiChevronLeft size={30} />
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * (100 / VISIBLE_DESKTOP)}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 shrink-0 px-3"
                >
                  <div className="h-full text-left text-lg bg-gray-50 dark:bg-gray-900! border border-gray-300 dark:border-gray-800! rounded-2xl p-10 flex flex-col gap-4">
                    <div className="flex gap-1 text-yellow-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FiStar key={i} size={20} fill="currentColor" />
                      ))}
                    </div>

                    <p className="mt-4 text-gray-600 dark:text-gray-300! leading-relaxed flex-1 text-[22px]">
                      “{t.quote}”
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700!">
                      <p className="font-bold text-gray-900 dark:text-white! text-xl">{t.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400!">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={goNext}
            disabled={index === maxIndex}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800! shadow-md text-gray-500 dark:text-gray-300! hover:text-[#4c42dc] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <FiChevronRight size={30} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-7 bg-linear-to-r from-[#4c42dc] to-[#4c42dc]'
                  : 'w-3 bg-gray-300 dark:bg-gray-600!'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}