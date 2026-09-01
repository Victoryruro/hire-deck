import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'

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
    </>
  )
}

export default Company