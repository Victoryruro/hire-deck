import { FiCheck, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const PLANS = [
  {
    name: 'Starter',
    description: 'For solo recruiters and small teams testing the waters.',
    price: '$99',
    period: 'per month',
    featured: false,
    cta: 'Start Free Trial',
    features: [
      { label: '2 active job postings', included: true },
      { label: '30-day listing duration', included: true },
      { label: 'Basic candidate matching', included: true },
      { label: 'Email support', included: true },
      { label: 'Enhanced company profile', included: false },
      { label: 'AI candidate ranking', included: false },
      { label: 'Featured listing placement', included: false },
      { label: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Professional',
    description: 'For growing teams with multiple open positions.',
    price: '$299',
    period: 'per month',
    featured: true,
    cta: 'Start Free Trial',
    features: [
      { label: '5 active job postings', included: true },
      { label: '60-day listing duration', included: true },
      { label: 'AI candidate matching', included: true },
      { label: 'Priority email & chat support', included: true },
      { label: 'Enhanced company profile', included: true },
      { label: 'AI candidate ranking', included: true },
      { label: 'Featured listing placement', included: true },
      { label: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'For companies hiring at scale, all the time.',
    price: '$799',
    period: 'per month',
    featured: false,
    cta: 'Contact Sales',
    features: [
      { label: 'Unlimited job postings', included: true },
      { label: '90-day listing duration', included: true },
      { label: 'AI candidate matching', included: true },
      { label: 'Priority email & chat support', included: true },
      { label: 'Enhanced company profile', included: true },
      { label: 'AI candidate ranking', included: true },
      { label: 'Featured listing placement', included: true },
      { label: 'Dedicated account manager', included: true },
    ],
  },
]

export default function Prices() {
  return (
    <section className="w-full pt-40 py-16 px-6 bg-gray-50 dark:bg-gray-950!">
      <div className="w-5/6 mx-auto">
        <div className="text-center mb-20">
          <span className="text-lg font-semibold text-[#4c42dc] bg-[#d0caf1] p-1.5 pr-3.5 pl-3.5 rounded-full mb-3 inline-block">
            Pricing Plan
          </span>
          <h2 className="text-6xl md:text-6xl font-extrabold text-gray-900 dark:text-white!">
            Find the Right Plan for Your Team
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400!">
            Whether you are hiring for one role or scaling your entire team, we have a plan that fits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative  rounded-2xl p-6 pt-8 bg-white dark:bg-gray-900! border-2 ${
                plan.featured
                  ? 'border-[#4c42dc] shadow-xl md:-mt-4 md:mb-4'
                  : 'border-gray-200 dark:border-gray-700!'
              }`}
            >
              {/* Most Popular badge */}
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-[#4c42dc] to-[#7123bb] text-white text-lg font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <h3 className="text-5xl font-bold text-gray-900 dark:text-white!">
                {plan.name}
              </h3>

              <p className="mt-2 text-lg text-gray-500 dark:text-gray-400! min-h-[80px]">
                {plan.description}
              </p>

              <div className="mt-6 text-center">
                <span className="text-4xl font-extrabold text-gray-900 dark:text-white!">
                  {plan.price}
                </span>
                <p className="text-sm text-gray-400 mt-1">{plan.period}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-start gap-3 text-xl"
                  >
                    {feature.included ? (
                      <FiCheck className="text-[#4c42dc] dark:text-[#8f7ff5]! shrink-0 mt-0.5" size={16} />
                    ) : (
                      <FiX className="text-gray-300 dark:text-gray-600! shrink-0 mt-0.5" size={16} />
                    )}
                    <span
                      className={
                        feature.included
                          ? 'text-gray-700 dark:text-gray-200!'
                          : 'text-gray-400 dark:text-gray-600!'
                      }
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/PostAJob"
                className={`mt-8 block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-linear-to-r from-[#4c42dc] to-[#7123bb] text-white hover:opacity-90'
                    : 'bg-gray-100 dark:bg-gray-800! text-gray-800 dark:text-gray-200! hover:bg-gray-200 dark:hover:bg-gray-700!'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}