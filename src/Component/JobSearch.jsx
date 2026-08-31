import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiMapPin, FiSliders, FiChevronUp, FiChevronDown } from 'react-icons/fi'

const JOB_TYPES = ['Full-time', 'Part-time', 'Remote', 'Contract']
const EXPERIENCE_LEVELS = ['Entry Level', 'Mid Level', 'Senior', 'Lead', 'Executive']
const CATEGORIES = ['All Categories', 'Engineering', 'Design', 'Marketing', 'Sales', 'Product']

const SALARY_MIN = 30
const SALARY_MAX = 250
const JobSearchFilters = () => {
  const navigate = useNavigate()

  const [keyword, setKeyword] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('All Categories')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [salary, setSalary] = useState(100)
  const [jobTypes, setJobTypes] = useState([])
  const [experience, setExperience] = useState([])

  const toggleItem = (list, setList, item) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item])
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (keyword) params.set('q', keyword)
    if (location) params.set('location', location)
    if (category !== 'All Categories') params.set('category', category)
    params.set('salaryMin', salary)
    if (jobTypes.length) params.set('type', jobTypes.join(','))
    if (experience.length) params.set('experience', experience.join(','))

    navigate(`/jobs?${params.toString()}`)
  }

  return (
    <div className="w-11/12 lg:w-full max-w-4xl mx-auto bg-white dark:bg-gray-900! rounded-2xl shadow-xl p-10 ">
      {/* Search row */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 flex items-center gap-2 bg-gray-50 dark:bg-gray-800! border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-400 shrink-0" size={18} />
          <input
            type="text"
            placeholder="Job title, keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full p-3 bg-transparent outline-none text-sm text-gray-700 dark:text-white! placeholder:text-gray-400 dark:placeholder:text-gray-500!"
          />
        </div>

        <div className="flex-1 flex items-center gap-2 bg-gray-50 dark:bg-gray-800! border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5">
          <FiMapPin className="text-gray-400 shrink-0" size={18} />
          <input
            type="text"
            placeholder="City, state, or remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent outline-none text-sm text-gray-700 dark:text-white! placeholder:text-gray-400 dark:placeholder:text-gray-500!"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-gray-50 dark:bg-gray-800! border border-gray-200 dark:border-gray-700 rounded-lg px-9 py-2.5 text-md text-gray-700 dark:text-white! outline-none cursor-pointer text-center"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          className="px-9 py-2 bg-[#4c42dc] text-white font-semibold rounded-lg hover:opacity-90 transition-all whitespace-nowrap"
        >
          Search Jobs
        </button>
      </div>

      {/* Advanced filters toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center gap-2 mx-auto mt-4 text-sm font-semibold text-[#4c42dc] dark:text-[#8f7ff5] hover:opacity-80 transition"
      >
        <FiSliders size={16} />
        Advanced Filters
        {showAdvanced ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
      </button>

      {/* Advanced filters panel */}
      {showAdvanced && (
        <div className="mt-4  bg-gray-50 dark:bg-gray-800! rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Salary range */}
          <div>
            <p className="text-sm font-bold tracking-wider text-gray-600 dark:text-gray-300 text-center mb-4 uppercase">
              Salary Range
            </p>
            <input
              type="range"
              min={SALARY_MIN}
              max={SALARY_MAX}
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full accent-[#4c42dc]"
            />
            <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500! mt-2">
              <span>${SALARY_MIN}K</span>
              <span className="text-[#4c42dc] dark:text-[#8f7ff5] font-bold">${salary}K+</span>
              <span>${SALARY_MAX}K</span>
            </div>
          </div>

          {/* Job type */}
          <div>
            <p className="text-sm font-bold tracking-wider text-gray-600 dark:text-gray-300 text-center mb-4 uppercase">
              Job Type
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {JOB_TYPES.map((type) => (
                <FilterPill
                  key={type}
                  label={type}
                  active={jobTypes.includes(type)}
                  onClick={() => toggleItem(jobTypes, setJobTypes, type)}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <p className="text-sm font-bold  tracking-wider text-gray-600 dark:text-gray-300 text-center mb-4 uppercase">
              Experience
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {EXPERIENCE_LEVELS.map((level) => (
                <FilterPill
                  key={level}
                  label={level}
                  active={experience.includes(level)}
                  onClick={() => toggleItem(experience, setExperience, level)}
                />
              ))}
            </div>
          </div>
        </div>
      )}



    </div>
    
  )
}

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
        active
          ? 'bg-linear-to-r from-[#4c42dc] to-[#7123bb] text-white border-transparent'
          : 'bg-white dark:bg-gray-700! text-gray-600 dark:text-gray-200! border-gray-200 dark:border-gray-600!'
      }`}
    >
      {label}
    </button>
  )
}

export default JobSearchFilters