import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Job from './Pages/Job'
import Company from './Pages/Company'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import BlogPost from './Component/BlogPage/BlogPost'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import './App.css'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
