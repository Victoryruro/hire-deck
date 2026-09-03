import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Job from './Pages/Job'
import Company from './Pages/Company'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
// import Menu from './Pages/Menu'
// import Contact from './Pages/Contact'
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
          {/* <Route path="/Menu" element={<Menu />} /> */}
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
