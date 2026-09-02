import React from 'react'
import image from '../../assets/HireDeskAbout.jpg'

const AboutHero = () => {
  return (
    <>
        <section className="w-full grid grid-cols-1 lg:grid-cols-2  py-24 px-10 pt-32 pb-32 bg-[#ffffff] dark:bg-[#030712]! items-center gap-10">
            <div className=" mx-auto p-4">
                <h2 className="text-lg md:text-lg w-3/12 font-medium  text-[#4f46e5]! rounded-full bg-[#e0e7ff]  leading-tight p-2 m-2">
                    Our Mission
                </h2>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white! text-left leading-tight m-2">
                    Connecting Talent with Opportunity
                </h2>
                <p className="text-2xl text-primary-50 text-left italic m-4">
                    “To make the job search process transparent, efficient, and empowering for both candidates and employers.”
                </p>
                <p className="mt-5 text-xl text-gray-700 dark:text-gray-500!  mx-auto leading-relaxed text-left m-2">
                    HireDesk was founded in 2025 by a team of recruiters and engineers who saw firsthand how broken the traditional hiring process was. Job seekers spent hours on outdated platforms, employers sifted through unqualified applications, and both sides felt the process was working against them.
                    <br />
                    <br />
                    We built HireDesk to change that. Our platform uses intelligent matching, transparent salary data, and a streamlined application process to connect the right people with the right opportunities. Today, we serve over 500 companies and have helped more than 50,000 professionals find their next role.
                </p>
            </div>
            <div className="max-w-3xl mx-auto p-4">
                <img src={image} alt="About HireDesk" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
        </section>
    
    </>
  )
}

export default AboutHero