import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'
import BlogDisplay from '../Component/BlogPage/BlogDisplay'

const Blog = () => {
  return (
    <>
        <div className=' bg-gray-50 dark:bg-gray-900!'>
            <PageHero
                title="Career Insights & Tips"
                
                subtitle="Expert advice on job searching, interviewing, salary negotiation, and professional growth."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blog' },
                ]}
            /> 
            <BlogDisplay/>        
        </div>
    </>
  )
}

export default Blog