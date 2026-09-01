import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'
import JobSearchEngine from '../Component/JobPageComponents/JobSearchEngine'
import JobDisplayFull from '../Component/JobPageComponents/JobDisplayFull'

const Job = () => {
  return (
    <>
        <PageHero
            title="Browse Jobs"
            subtitle="Search and filter through thousands of opportunities to find your perfect role."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Jobs' },
            ]}
        />
        <div className='w-full grid grid-cols-1 lg:grid-cols-4 p-12 gap-5 dark:bg-black!' >
            <JobSearchEngine className="lg:col-span-1" />
            <JobDisplayFull className="lg:col-span-2" />
        </div>
    </>
  )
}

export default Job