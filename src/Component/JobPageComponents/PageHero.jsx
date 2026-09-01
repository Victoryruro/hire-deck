import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="w-full pt-40 pb-16 px-6 bg-linear-to-br from-[#4c42dc] to-[#3730c9] dark:to-[#0b0925]! text-center">
      <div className="max-w-3xl mx-auto p-12 ">
        <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-indigo-100 text-lg md:text-xl text-nowrap leading-relaxed">
            {subtitle}
          </p>
        )}

        {breadcrumbs.length > 0 && (
          <nav className="mt-6 flex items-center justify-center gap-2 text-xl text-indigo-200">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <span key={crumb.label} className="flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link to={crumb.href} className="hover:text-white transition">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-white font-semibold' : ''}>
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && <FiChevronRight size={14} />}
                </span>
              )
            })}
          </nav>
        )}
      </div>
    </section>
  )
}