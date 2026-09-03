import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'
import Faq from '../Component/Faq'
import { PricingCta } from '../Component/PricingPageComponent/PricingCta'
import Prices from '../Component/PricingPageComponent/Prices'

const Pricing = () => {
  return (
    <>
        <PageHero
        
            title="Employer Pricing"
            
            subtitle="Simple, transparent pricing for companies of every size. No hidden fees, no long-term contracts."
            breadcrumbs={[
                { label: 'Home', href: '/' },
                { label: 'Pricing' },
            ]}
        />
        <Prices/>
        <Faq/>
        <PricingCta/>
    </>
  )
}

export default Pricing