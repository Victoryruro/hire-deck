import React from 'react'
import AboutCta from '../Component/AboutPageComponent.jsx/AboutCta'
import PageHero from '../Component/JobPageComponents/PageHero'
import AboutHero from '../Component/AboutPageComponent.jsx/AboutHero'
import OurValues from '../Component/AboutPageComponent.jsx/Values'
import Team from '../Component/AboutPageComponent.jsx/Teams'



const About = () => {
  return (
    <>
        <div>
            <PageHero
            
                title="About HireDesk"
               
                subtitle="Founded in 2022, HireHub is the modern job board connecting exceptional talent with industry-leading companies worldwide."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About' },
                ]}
            />
            <AboutHero/>
            <OurValues/>
            <Team/>
            <AboutCta/>
        </div>
    </>
  )
}

export default About