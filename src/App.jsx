import React from 'react'
import News from './pages/News'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import NewsDetails from './pages/NewsDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/news/:id' element={<NewsDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
