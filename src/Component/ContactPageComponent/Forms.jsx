import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Forms = () => {
  return (
    <>
          <div className='w-full grid grid-cols-1 lg:col-span-2 gap-5' >
                <section className='w-full rounded-xl  sm:p-8  text-left'>
                    <div className='mb-8 p-7'>

                        <h2 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white!'>Send us a message</h2>
                        <p className='mt-3 text-lg leading-relaxed text-gray-600 dark:text-gray-300!'>
                            Fill out the form below and we will get back to you within 24 hours.
                        </p>
                    </div>
                    <form className='space-y-5 gap-4'>
                        <div className='w-full flex flex-wrap gap-15 justify-around'>
                            <div className=' inline-block w-2/5 '>
                                    <label htmlFor="name" className='mb-2 block text-xl font-semibold text-gray-800 dark:text-gray-200!'>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                        placeholder="John Doe"
                                        className='block w-full rounded-lg border border-gray-200 bg-gray-50 text-xl px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#4c42dc] focus:ring-2 focus:ring-indigo-100 dark:border-gray-700! dark:bg-gray-800! dark:text-white! dark:placeholder:text-gray-500 dark:focus:ring-indigo-900!'
                                />
                            </div>
                            <div className='inline-block w-2/5'>
                                    <label htmlFor="email" className='mb-2 block text-xl font-semibold text-gray-800 dark:text-gray-200!'>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                        placeholder="johndoe@example.com"
                                        className='block w-full rounded-lg border border-gray-200 bg-gray-50 text-xl px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#4c42dc] focus:ring-2 focus:ring-indigo-100 dark:border-gray-700! dark:bg-gray-800! dark:text-white! dark:placeholder:text-gray-500 dark:focus:ring-indigo-900!'
                                />
                            </div>                            
                        </div>
                        <div className='w-full flex flex-col flex-wrap gap-4 justify-between p-7 '>
                                <div className='mb-4 inline-block w-full'>
                                    <label htmlFor="subject" className='mb-2 block text-xl font-semibold text-gray-800 dark:text-gray-200!'>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                        placeholder="Job posting , general inquiry ..."
                                        className='block w-full rounded-lg border border-gray-200 bg-gray-50 text-xl px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#4c42dc] focus:ring-2 focus:ring-indigo-100 dark:border-gray-700! dark:bg-gray-800! dark:text-white! dark:placeholder:text-gray-500 dark:focus:ring-indigo-900!'
                                />
                            </div>                            
                            <div className='mb-4 block '>
                                    <label htmlFor="message" className='mb-2 block text-xl font-semibold text-gray-800 dark:text-gray-200!'>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={8}
                                        placeholder="Tell us how we can help..."
                                        className='block w-full text-xl resize-y rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#4c42dc] focus:ring-2 focus:ring-indigo-100 dark:border-gray-700! dark:bg-gray-800! dark:text-white! dark:placeholder:text-gray-500 dark:focus:ring-indigo-900!'
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                        className='inline-flex lg:w-1/4 items-center justify-center gap-2 rounded-lg bg-[#4c42dc] px-5 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-[#3f35c4] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
                                >
                                    Send Message
                                        <FiArrowRight size={25} />
                                </button>
                            </div>
                        </div>


                </form>
            </section>   
        </div>
    </>
  )
}

export default Forms