import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'

const Blog = () => {
  return (
    <>
        <div className='w-full bg-gray-50 dark:bg-gray-900!'>
            <PageHero
                title="Career Insights & Tips"
                
                subtitle="Expert advice on job searching, interviewing, salary negotiation, and professional growth."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog' },
                ]}
            />         
        </div>
    </>
  )
}

export default Blog