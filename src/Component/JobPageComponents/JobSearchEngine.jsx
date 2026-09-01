import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiMapPin, FiSliders, FiChevronUp, FiChevronDown } from 'react-icons/fi'

const JOB_TYPES = ['Full-time', 'Part-time', 'Remote', 'Contract']
const EXPERIENCE_LEVELS = ['Entry Level', 'Mid Level', 'Senior', 'Lead', 'Executive']
const CATEGORIES = ['All Categories', 'Engineering', 'Design', 'Marketing', 'Sales', 'Product']

const SALARY_MIN = 30
const SALARY_MAX = 250
const JobSearchEngine = () => {
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
    <div className="w-full h-fit border-2 border-gray-400  mx-auto bg-white dark:bg-gray-900! rounded-2xl  p-3 pt-10 pb-10 sticky top-30 self-start ">
      {/* Search row */}
      <h1 className='text-3xl font-semibold text-left pb-8 dark:text-gray-300!'>Filters</h1>
      <div className="flex flex-col gap-3 items-start text-left dark:text-gray-300!"> 
        <div className=" items-center gap-y-9 ">
          <label htmlFor="text" className='text-2xl '>Keyword</label><br/>
          <input
            type="text"
            placeholder="Job title"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className=" p-3  outline-none text-lg text-gray-700 bg-gray-50 dark:text-white! dark:bg-gray-800! border border-gray-200 dark:border-gray-700! rounded-lg px-8 py-3  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 "
          />
        </div>
        <div className=" items-center gap-2 mt-7">
          <label htmlFor="text" className='text-2xl'>Location</label><br />
          <input
            type="text"
            placeholder="City or Remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className=" p-3  outline-none text-lg text-gray-700 dark:text-white! dark:bg-gray-800! border border-gray-200 dark:border-gray-700! rounded-lg px-8 py-3  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 "
          />
        </div>
        <div className=" items-center gap-2 ">

        </div>
        <div className="w-full mt-4   p-6 grid grid-cols-1 gap-8">


          {/* Job type */}
          <div>
            <p className="text-lg font-bold tracking-wider text-gray-600 dark:text-gray-300! text-left mb-4 uppercase">
              Job Type
            </p>
            <div className="flex flex-col gap-3 text-sm">
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
            <p className="text-lg font-bold  tracking-wider text-gray-600 dark:text-gray-300 text-left mb-4 uppercase">
              Experience
            </p>
            <div className="flex flex-col gap-3 text-lg">
              {EXPERIENCE_LEVELS.map((level) => (
                <FilterPill
                  key={level}
                  label={level}
                  className="text-lg"
                  active={experience.includes(level)}
                  onClick={() => toggleItem(experience, setExperience, level)}
                />
              ))}
            </div>
          </div>  
                  {/* Salary range */}
          <div className="w-full">
            <p className="text-lg font-bold tracking-wider text-gray-600 dark:text-gray-300! text-center mb-4 uppercase">
              Salary Range
            </p>
            <input
              type="range"
              min={SALARY_MIN}
              max={SALARY_MAX}
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full accent-[#4c42dc] text-2xl"
            />
            <div className="w-full flex justify-between text-lg text-gray-400 dark:text-gray-500! mt-2">
              <span>${SALARY_MIN}K</span>
              <span className="text-[#4c42dc] dark:text-[#8f7ff5]! font-bold">${salary}K+</span>
              <span>${SALARY_MAX}K</span>
            </div>
          </div>
        </div>





        <button
          onClick={handleSearch}
          className="px-9 py-2 bg-[#4c42dc] text-white font-semibold rounded-lg hover:opacity-90 transition-all whitespace-nowrap text-lg mt-6 w-full"
        >
          Apply Filters
        </button>
      </div>





    </div>
    
  )
}

function FilterPill({ label, active, onClick }) {
  return (
    <label className="w-full  flex items-center gap-5 cursor-pointer select-none text-gray-700 dark:text-gray-200!">
      <input
        type="checkbox"
        checked={active}
        onChange={onClick}
        className="h-6 w-6 accent-[#4c42dc] rounded"
      />
      <span className="text-lg font-medium">{label}</span>
    </label>
  )
}

export default JobSearchEngine