import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import img1 from '../../images/venzologo.png';
import MenuIcon from '@mui/icons-material/Menu';
import img2 from '../../images/Group 142.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='navbar-logo' onClick={handleLogoClick} style={{cursor: 'pointer'}}>
          <img className= 'venzo-logo' src={img1} alt='venzo' />
        </Link>
        <div className='bg-img'>
            <img className='gradient-img' src={img2} alt='gradient'/>
        </div>

        <div className='navbar-menu'>
          <div className='dropdown'>
            <button onClick={toggleDropdown} className='dropdown-button'>
              Accessibility <span className='arrow'>{dropdownVisible ? '▲' : '▼'}</span>
            </button>
            {dropdownVisible && (
              <ul className='dropdown-menu'>
                <li><Link to='/accessibility1'>Option 1</Link></li>
                <li><Link to='/accessibility2'>Option 2</Link></li>
                <li><Link to='/accessibility3'>Option 3</Link></li>
              </ul>
            )}
          </div>
        </div>
        <div className='menu-icon'>
            <MenuIcon className='icon'/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
