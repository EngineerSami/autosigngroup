import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <TopBar />
              <HomePage />
              <Footer />
            </>
          } />
        </Routes>

        <Routes>
          <Route path="/contact" element={
            <>
              <TopBar />
              <ContactUs />
              <Footer />
            </>
          } />
        </Routes>

        <Routes>
          <Route path="/about" element={
            <>
              <TopBar />
              <AboutUs />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
