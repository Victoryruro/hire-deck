import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'
import CompanyDisplay from '../Component/CompanyPageComponents/CompanyDisplay'
import CompanyCta from '../Component/CompanyPageComponents/CompanyCta'


const Company = () => {
  return (
    <>
        <PageHero
            title="Company Directory"
            subtitle="Explore top employers and discover your next workplace. Learn about company culture, benefits, and open positions."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Company' },
            ]}
        />
        <div className='w-full grid grid-cols-1  gap-5 dark:bg-black!' >

            <CompanyDisplay/>
            <CompanyCta/>
        
        </div>
    </>
  )
}

export default Company