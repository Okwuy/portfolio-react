import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home page/Home'
import About from './components/about/About'
import Contact from './components/blog/Contact'
import Gallery from './components/menu/Gallery'
import Portfolio from './components/testimonial/Portfolio'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Contact/>}/>
      <Route path='/menu' element={<Gallery/>}/>
      <Route path='/testimonial' element={<Portfolio/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App