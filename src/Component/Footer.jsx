import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/Hiredesklogo3.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaHome, FaUser, FaSearch, FaPhoneAlt } from 'react-icons/fa'
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="bg-primary-500 text-gray-500 py-8 mt-16 paddingLeftRight pt-12">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6  text-2xl font-semibold text-left">
                  {/* <!-- Footer Left: Logo and Description --> */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        {/* <!-- Logo --> */}
                    <div className="shrink-0 text-primary-50 font-bold text-2xl ">
                        <Link to="/">
                        <img src={image} alt="Logo" className="h-20 " />
                        </Link>
                    </div>
                      <p className="mt-2  text-2xl font-semibold text-left pb-4">
                          Connect with your next career opportunity. HireHub is the modern job board platform for top talent and leading employers.
                      </p>
                    <div className="mt-4 space-y-5 text-left">
                        <a href="tel:+2341234567890" className="hover:text-gray-300 transition ">
                            <FaPhoneAlt className="inline mr-3" />
                                (234) 123-456-7890
                        </a><br /><br />
                        <a href="mailto:info@hirehub.com" className="hover:text-gray-300 transition ">
                            <FaEnvelope className="inline mr-3" />
                            info@hirehub.com
                        </a> <br /><br />
                        <a href="https://www.google.com/maps/place/HireHub" className="hover:text-gray-300 transition ">
                            <FaMapMarkerAlt className="inline mr-3" />
                            123 Job Street, Career City
                        </a>
                    </div>
                                      {/* <!-- Footer Right: Social Media & Contact --> */}
                    <div>
                        
                        <div className="mt-8 flex flex-nowrap gap-6 pt-2.5 mb-14">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]   p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaInstagram size={35} />
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaFacebook size={35} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaTwitter size={35} />
                            </a>
                            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaTiktok size={35} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-xl bg-[#1f2937]  p-2 hover:text-primary-400 transition text-gray-500 hover:scale-110 transform duration-200">
                                <FaLinkedin size={35} />
                            </a>
                        </div>
                        {/* <p className="mt-4 text-sm">Email: support@LemonDay.com</p> */}
                    </div>
                </div>

                <div className="w-full grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  justify-center  md:col-span-2 gap-6">
                  <div className="p-8  ">
                      <h3 className="text-lg font-bold text-primary-400 uppercase">For Job Seekers</h3>
                      <ul className="mt-4 space-y-2">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Browse Jobs</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">Companies</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">Career Tips</Link></li>
                          <li><Link to="/Menu" className=" hover:text-gray-300 transition">Salary Guide</Link></li>
                          
                      </ul>
                  </div>
                  <div className="p-8">
                      <h3 className="text-lg font-bold text-primary-400 uppercase">For Employers</h3>
                      <ul className="mt-4 space-y-2">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Post a Job</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">Pricing</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">For Employers</Link></li>
                          <li><Link to="/Menu" className=" hover:text-gray-300 transition">High Resources</Link></li>
                         
                      </ul>
                  </div>
                  <div className="p-8 ">
                      <h3 className="text-lg font-bold text-primary-400 uppercase">Resources</h3>
                      <ul className="mt-4 space-y-2">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Blog</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">About Us</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">Features</Link></li>
                          <li><Link to="/Menu" className=" hover:text-gray-300 transition">Style Guide</Link></li>

                      </ul>
                  </div>

                  <div className="p-8">
                      <h3 className="text-lg font-bold text-primary-400 uppercase">Company</h3>
                      <ul className="mt-4 space-y-2">
                          <li><Link to="/" className=" hover:text-gray-300 transition">About</Link></li>
                          <li><Link to="/" className=" hover:text-gray-300 transition">Contact</Link></li>
                          <li><Link to="/#Faq" className=" hover:text-gray-300 transition">Privacy Policy</Link></li>
                          <li><Link to="/#Review" className=" hover:text-gray-300 transition">Terms of Service</Link></li>
                      </ul>
                  </div>                    
                </div>  {/* <!-- Footer Center: Useful Links --> */}



                
            </div>

              {/* <!-- Footer Bottom: Copyright --> */}
              <div className="mt-8 border-t border-gray-700 pt-4 text-center  text-xl font-semibold text-gray-500 flex justify-between items-center  gap-4 mb-8">
                  <p>© 2026 VicRuro React Project.</p>
                  <div>
                    <ul className="mt-4 space-y-2 flex flex-wrap justify-center gap-6 text-xl font-semibold text-gray-500">
                          <li><Link to="/#hero" className=" hover:text-gray-300 transition">Privacy Policy</Link></li>
                          <li><Link to="/About#about" className=" hover:text-gray-300 transition">Terms of Service</Link></li>
                          <li><Link to="/About#shop" className=" hover:text-gray-300 transition">Style Guide</Link></li>


                    </ul>
                  </div>
              </div>
          </div>
      </footer>
    </>
  )
}

export default Footer