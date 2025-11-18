import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TopBar from './components/TopBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';



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
      </Router>
    </>
  )
}

export default App
