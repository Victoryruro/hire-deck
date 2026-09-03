import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'

const Contact = () => {
  return (
    <>
        <PageHero
            title="Contact Us"
            
            subtitle="Have questions about HireDesk? Our team is here to help job seekers and employers alike. Reach out to us for support, feedback, or partnership inquiries."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Contact' },
            ]}
        />   
    </>
  )
}

export default Contact