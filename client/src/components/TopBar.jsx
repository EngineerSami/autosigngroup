import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/TopBar.css';
import logo from '../images/logo-en.png';

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Detect current page or hash
  const activeLink = location.pathname + location.hash;

  return (
    <header className="topbar">
      <div className="topbar-container">
        
        <div className="topbar-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Company Logo" />
          </Link>
        </div>

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            <li>
              <Link 
                to="/"
                onClick={closeMenu}
                className={activeLink === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>

            <li>
              <Link 
                to="/about"
                onClick={closeMenu}
                className={activeLink === '/about' ? 'active' : ''}>
                About Us
              </Link>
            </li>

            <li>
              <Link 
                to="/#portfolio"
                onClick={closeMenu}
                className={activeLink === '/#portfolio' ? 'active' : ''}>
                Portfolio
              </Link>
            </li>

            <li>
              <Link 
                to="/#news"
                onClick={closeMenu}
                className={activeLink === '/#news' ? 'active' : ''}>
                News
              </Link>
            </li>

            <li>
              <Link 
                to="/contact"
                onClick={closeMenu}
                className={activeLink === '/contact' ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className={`hamburger-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <div className="accent-bar"></div>
    </header>
  );
}

export default TopBar;
