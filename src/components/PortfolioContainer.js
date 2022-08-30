import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '../styles/styles.css'

export default function PortfolioContainer () {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
      if (currentPage === 'About') {
        return <About/>;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />
      }
      if (currentPage === 'Contact') {
        return <Contact />
      }
      return <Resume/>
    }

    const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="circle">
        <div className="inner-circle"></div>
      </div>
      <div className="header-container">
        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
      <div className="content-container">
        {renderPage()}
      </div>
      <Footer />
    </div>

  )
}
