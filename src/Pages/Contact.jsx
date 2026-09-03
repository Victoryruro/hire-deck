import React from 'react'
import PageHero from '../Component/JobPageComponents/PageHero'
import Forms from '../Component/ContactPageComponent/Forms'
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import ContactMap from '../Component/ContactPageComponent/ContactMap'

const Contact = () => {
  return (
    <>
        <div className='w-full bg-gray-50 dark:bg-gray-900!'>
            <PageHero
                title="Contact Us"
                
                subtitle="Have questions about HireDesk? Our team is here to help job seekers and employers alike. Reach out to us for support, feedback, or partnership inquiries."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact' },
                ]}
            /> 
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 pb-0 mb-5 dark:bg-gray-900!">
                <Forms/>
                {/* get in touch */}
                <div className="w-full h-fit rounded-xl   text-left shadow-md dark:bg-gray-900! p-20 pt-32 pb-32">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white!">Get in Touch</h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300!">
                        Reach out through any of these channels and our team will respond promptly.
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-[#4c42dc] dark:bg-indigo-950! dark:text-indigo-300! text-xl">
                                <FiMail size={30} aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white! text-xl">Email Us</h3>
                                <a href="mailto:hello@hirehub.com" className="mt-1 block text-gray-600 transition hover:text-[#4c42dc] dark:text-gray-300! dark:hover:text-indigo-300! text-xl">
                                    hello@hirehub.com
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-[#4c42dc] dark:bg-indigo-950! dark:text-indigo-300!">
                                <FiPhone size={30} aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white! text-xl">Call Us</h3>
                                <a href="tel:+12344923847" className="mt-1 block text-gray-600 transition hover:text-[#4c42dc] dark:text-gray-300! dark:hover:text-indigo-300! text-xl">
                                    (234) 492-3847
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-[#4c42dc] dark:bg-indigo-950! dark:text-indigo-300!">
                                <FiMapPin size={30} aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white! text-xl">Visit Us</h3>
                                <p className="mt-1 leading-relaxed text-gray-600 dark:text-gray-300!">
                                    200 Ikoyi<br />
                                    Lagos, Nigeria
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-[#4c42dc] dark:bg-indigo-950! dark:text-indigo-300!">
                                <FiClock size={30   } aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white! text-xl">Business Hours</h3>
                                <p className="mt-1 leading-relaxed text-gray-600 dark:text-gray-300!">
                                    Mon - Fri: 9:00 AM - 6:00 PM WAT<br />
                                    Sat - Sun: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <ContactMap address="HireDesk Office, Lagos, Nigeria"/>             
        </div>

    </>
  )
}

export default Contact