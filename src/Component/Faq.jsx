import React from 'react'
import { motion } from 'motion/react'

const Faq = () => {
  return (
    <>
        <div id="Faq" className="space-y-4 p-6 w-full mx-auto text-center flex flex-col justify-center items-center dark:bg-[#030712] ">
            <span className="inline-block bg-indigo-100 dark:bg-indigo-900/40! text-[#4c42dc] dark:text-[#8f7ff5]! text-lg font-semibold px-4 py-1.5 rounded-full mb-4">
                FAQS
            </span>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white! sm:text-5xl p-3.5 ">Frequently Asked Questions</h1>
            <p className="mt-3 text-gray-500 dark:text-gray-400!  mx-auto text-xl mb-5">Everything you need to know about finding jobs and hiring on HireDesk.</p>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 1 * 0.1, ease: 'easeOut' }}
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden bg-primary-400 dark:bg-primary-500" open=""  >
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100  p-6 text-gray-900 dark:border-gray-700! dark:bg-gray-800! dark:text-white!">
                <h2 className="text-2xl font-medium">Is HireDesk free for job seekers?</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 2 * 0.1, ease: 'easeOut' }}
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden bg-primary-400 dark:bg-primary-500" open=""  >
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100  p-6 text-gray-900 dark:border-gray-700! dark:bg-gray-800! dark:text-white!">
                <h2 className="text-2xl font-medium">How do I post a job on HireHub </h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 1 * 0.1, ease: 'easeOut' }}
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden bg-primary-400 dark:bg-primary-500" open=""  >
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100  p-6 text-gray-900 dark:border-gray-700! dark:bg-gray-800! dark:text-white!">
                <h2 className="text-2xl font-medium">How long does it take to get hired?</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 4 * 0.1, ease: 'easeOut' }}            
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden bg-primary-400 dark:bg-primary-500" open=""  >
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100  p-6 text-gray-900 dark:border-gray-700! dark:bg-gray-800! dark:text-white!">
                <h2 className="text-2xl font-medium">Can I search for remote jobs specifically</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>
            <motion.details 
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 5 * 0.1, ease: 'easeOut' }}            
                className="w-full md:w-full lg:w-3/4 mt-10 group [&amp;_summary::-webkit-details-marker]:hidden bg-primary-400 dark:bg-primary-500" open=""  >
                <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100  p-6 text-gray-900 dark:border-gray-700! dark:bg-gray-800! dark:text-white!">
                <h2 className="text-2xl font-medium">How does the candidate matching work?</h2>

                <svg xmlns="http://www.w3.org/2000/svg" className="block size-5 shrink-0 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="hidden size-5 shrink-0 group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                </summary>

                <p className="px-4 pt-4 text-gray-900 dark:text-white! text-left p-12 text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
                </p>
            </motion.details>


        </div>

    </>
  )
}

export default Faq