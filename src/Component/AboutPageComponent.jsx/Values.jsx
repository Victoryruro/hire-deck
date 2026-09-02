import { FiShield, FiTarget, FiZap } from 'react-icons/fi'

const VALUES = [
  {
    icon: FiShield,
    title: 'Radical Transparency',
    description:
      'We believe salary ranges, company culture, and hiring timelines should be visible upfront. No surprises, no hidden agendas.',
  },
  {
    icon: FiZap,
    title: 'Speed to Hire',
    description:
      'Time kills deals — in hiring too. Our platform is designed to reduce friction and get candidates and employers connected faster.',
  },
  {
    icon: FiTarget,
    title: 'Quality Over Quantity',
    description:
      'We focus on meaningful connections rather than mass applications. Better matches mean better outcomes for everyone.',
  },
]

export default function OurValues() {
  return (
    <section className="w-full py-16 pb-30 pt-30 px-6 bg-gray-50 dark:bg-gray-950!">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white!">
          Our Values
        </h2>

        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400!">
          The principles that drive everything we do at HireDesk.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="text-left text-3xl bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! rounded-2xl p-16"
            >
              <div className="h-11 w-11 rounded-lg bg-indigo-100 dark:bg-indigo-900/40! flex items-center justify-center">
                <Icon size={30} className="text-[#4c42dc] dark:text-[#8f7ff5]!" />
              </div>

              <h3 className="mt-4 font-bold text-gray-900 dark:text-white! text-3xl">
                {title}
              </h3>

              <p className="mt-2 text-xl text-gray-500 dark:text-gray-400! leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}