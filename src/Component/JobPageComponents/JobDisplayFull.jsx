import JobCard from '../JobsSection/JobCard'
import logo from "../../assets/Hiredesklogo2.png"
import { FiArrowRight } from 'react-icons/fi'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const jobs = [
  {
    logo: logo,
    title: 'Senior React Developer',
    company: 'TechFlow Inc.',
    location: 'San Francisco, CA',
    salaryRange: '$140K - $180K',
    postedAgo: '2 days ago',
    tags: ['React', 'TypeScript', 'Node.js'],
    type: 'Full-time',
    featured: true,
    applyLink: '/jobs/senior-react-developer',
  },
  {
    logo: logo,
    title: 'Lead UX Designer',
    company: 'DesignCraft Studio',
    location: 'Remote',
    salaryRange: '$120K - $160K',
    postedAgo: '1 day ago',
    tags: ['Figma', 'User Research', 'Design Systems'],
    type: 'Remote',
    featured: true,
    applyLink: '/jobs/lead-ux-designer',
  },
    {
    logo: logo,
    title: 'Data Scientist',
    company: 'DataVault Analytics',
    location: 'Austin, TX',
    salaryRange: '$120K - $160K',
    postedAgo: '3 day ago',
    tags: ['Python', 'Machine Learning', 'SQL'],
    type: 'Full-time',
    featured: true,
    applyLink: '/jobs/lead-ux-designer',
  },
    {
    logo: logo,
    title: 'DevOps Engineer',
    company: 'CloudPeak Systems',
    location: 'Austin, TX',
    salaryRange: '$120K - $160K',
    postedAgo: '1 day ago',
    tags: ['AWS', 'Kubernetes', 'Terraform'],
    type: 'Full-time',
    featured: true,
    applyLink: '/jobs/lead-ux-designer',
  },
    {
    logo: logo,
    title: 'Lead  Designer',
    company: 'DesignCraft Studio',
    location: 'Remote',
    salaryRange: '$120K - $160K',
    postedAgo: '1 day ago',
    tags: ['Figma', 'User Research', 'Design Systems'],
    type: 'Remote',
    featured: true,
    applyLink: '/jobs/lead-ux-designer',
  },
    {
    logo: logo,
    title: 'Lead UX ',
    company: 'DesignCraft Studio',
    location: 'Remote',
    salaryRange: '$120K - $160K',
    postedAgo: '1 day ago',
    tags: ['Figma', 'User Research', 'Design Systems'],
    type: 'Remote',
    featured: true,
    applyLink: '/jobs/lead-ux-designer',
  },
    {
    logo: logo,
    title: 'Senior React Developer',
    company: 'TechFlow Inc.',
    location: 'San Francisco, CA',
    salaryRange: '$140K - $180K',
    postedAgo: '2 days ago',
    tags: ['React', 'TypeScript', 'Node.js'],
    type: 'Full-time',
    featured: true,
    applyLink: '/jobs/senior-react-developer',
  },
    {
    logo: logo,
    title: 'Senior React Developer',
    company: 'TechFlow Inc.',
    location: 'San Francisco, CA',
    salaryRange: '$140K - $180K',
    postedAgo: '2 days ago',
    tags: ['React', 'TypeScript', 'Node.js'],
    type: 'Full-time',
    featured: true,
    applyLink: '/jobs/senior-react-developer',
  },
   {   logo: logo,
    title: 'Lead  Designer',
    company: 'DesignCraft Studio',
    location: 'Remote',
    salaryRange: '$120K - $160K',
    postedAgo: '1 day ago',
    tags: ['Figma', 'User Research', 'Design Systems'],
    type: 'Remote',
    featured: true,
    applyLink: '/jobs/lead-ux-designer',
  },
     {   logo: logo,
    title: 'Lead  Designer',
    company: 'DesignCraft Studio',
    location: 'Remote',
    salaryRange: '$120K - $160K',
    postedAgo: '1 day ago',
    tags: ['Figma', 'User Research', 'Design Systems'],
    type: 'Remote',
    featured: true,
    applyLink: '/jobs/lead-ux-designer',
  },

]
export default function JobDisplayFull() {
    return (
        <>
            <div className="w-full grid grid-cols-1 lg:col-span-3 gap-6 pl-4 pr-4">
                <div className="flex items-center justify-between pb-10 text-lg text-gray-700 dark:text-gray-300!"> 
                    <p>Showing {jobs.length} jobs</p>
                    <select

                    className="bg-gray-50 dark:bg-gray-800! border border-gray-200 dark:border-gray-700! rounded-lg px-9 py-2.5 text-md text-gray-700 dark:text-white! outline-none cursor-pointer text-center  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="MostRecent" className="text-gray-700 dark:text-white">Most Recent</option>
                        <option value="HighSalary" className="text-gray-700 dark:text-white">Highest Salary</option>
                        <option value="MostRelevant" className="text-gray-700 dark:text-white">Most Relevant</option>


                    </select>
                </div>
                {jobs.map((job) => (
                    <JobCard key={job.title} {...job} />
                ))}
                <Pagination />
            </div>
        </>

    )
}  



function Pagination() {
  return (
    <nav className="flex items-center justify-center gap-2 mt-5">
      <button className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700! text-gray-600 dark:text-gray-300! text-lg font-medium hover:border-[#4c42dc] hover:text-[#4c42dc] transition-all">
        <FiChevronLeft size={16} />
        Previous
      </button>

      <button className="w-10 h-10 flex items-center justify-center rounded-lg text-lg font-semibold bg-linear-to-r from-[#4c42dc] to-[#4c42dc] text-white border border-transparent">
        1
      </button>

      <button className="w-10 h-10 flex items-center justify-center rounded-lg text-lg font-semibold bg-white dark:bg-gray-900! text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#4c42dc] hover:text-[#4c42dc] transition-all">
        2
      </button>

      <button className="w-10 h-10 flex items-center justify-center rounded-lg text-lg font-semibold bg-white dark:bg-gray-900! text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#4c42dc] hover:text-[#4c42dc] transition-all">
        3
      </button>

      <button className="flex items-center gap-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700! text-gray-600 dark:text-gray-300!    text-lg font-medium hover:border-[#4c42dc] hover:text-[#4c42dc] transition-all">
        Next
        <FiChevronRight size={16} />
      </button>
    </nav>
  )
}