import JobCard from './JobCard'
import logo from "../../assets/Hiredesklogo2.png"

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
]

export default function JobsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {jobs.map((job) => (
        <JobCard key={job.title} {...job} />
      ))}
    </div>
  )
}