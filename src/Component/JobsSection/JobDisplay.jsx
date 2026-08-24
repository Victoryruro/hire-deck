import JobCard from './JobCard'
import logo from "../../assets/Hiredesklogo2.png"
import { FiArrowRight } from 'react-icons/fi'

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

]

export default function JobsDisplay() {
  return (
    <>
        <div className='bg-white dark:bg-gray-900! border border-gray-200 dark:border-gray-700! text-center pt-12'>
            <div className='text-center flex flex-col items-center'>
                <p className='bg-[#e0e7ff] dark:bg-[#191a4a]! text-primary-50 text-center w-fit p-2.5 px-6.5 text-lg rounded-xl'>Featured Job</p> 
                <h1 className='text-7xl font-semibold pt-4 pb-5 dark:text-primary-400'>Lastest Oppurtunity</h1>
                <p className='text-gray-500 text-3xl pt-5'>Hand-picked positions from top companies looking for exceptional talent.</p>               
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-16">
            {jobs.map((job) => (
                <JobCard key={job.title} {...job} />
            ))}
            </div>
            <div className='flex items-center flex-col pb-18 '>
                <button
                //   onClick={handleSearch}
                className=" flex items-center px-12 py-4 bg-[#4c42dc] text-white font-semibold text-xl rounded-2xl shadow-gray-400 hover:opacity-90 transition-all "
                >
                View all Jobs <FiArrowRight size={16}/>
                </button>                
            </div>

        </div>

    </>

  )
}