import React from 'react';

function Header({ currentPage, handlePageChange }) {

  return (
    <div className="header">

      <div className="header-initials">
        <h1 className="initials">A. C.</h1>
      </div>

      <div className="navbar">
        <ul className="link-container">
          <li>
            <a 
              href="#about" 
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'red-underline' : 'black-underline'}>
                about
            </a>
          </li>
          <li>
            <a 
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'green-underline' : 'black-underline'}>
                portfolio
            </a>
          </li>
          <li>
            <a href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'yellow-underline' : 'black-underline'}>
                contact
            </a>
          </li>
          <li>
            <a href="#résumé"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'purple-underline' : 'black-underline'}>
                résumé
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Header;