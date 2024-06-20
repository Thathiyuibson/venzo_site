import React, { useState } from 'react';
import './OffshoreNavbar.css';
import { Link } from 'react-router-dom';
import img1 from '../../images/venzologo.png';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <div className='offshore-navbar'>
      <nav>
        <Link to='/' className='offshorenavbar-logo' onClick={handleLogoClick} style={{cursor: 'pointer'}}>
          <img className= 'venzo-logo' src={img1} alt='venzo' />
        </Link>
        <div className='offshorenavbar-menu'>
          <div className='offshoredropdown'>
            <button onClick={toggleDropdown} className='offshoredropdown-button'>
              Accessibility <span className='arrow'>{dropdownVisible ? '▲' : '▼'}</span>
            </button>
            {dropdownVisible && (
              <ul className='offshoredropdown-menu'>
                <li><Link to='/accessibility1'>Option 1</Link></li>
                <li><Link to='/accessibility2'>Option 2</Link></li>
                <li><Link to='/accessibility3'>Option 3</Link></li>
              </ul>
            )}
          </div>
        </div>
        <div className='offshoremenu-icon'>
            <MenuIcon className='icon'/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;