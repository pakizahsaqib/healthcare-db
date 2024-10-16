import React, { useState } from 'react';
import logo from '../assets/TestLogo.svg'
import doctor from '../assets/doc.png'
import setting from '../assets/settings.svg'
import more_v from '../assets/more_vert.svg'
import './Header.css'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = (index) => {
        setSelectedIndex(index);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className={`navbar-items ${isOpen ? 'open' : ''}`}>
                        <a 
                            onClick={() => handleClick(0)} 
                            id={selectedIndex === 0 ? 'selected' : ''} 
                            href="#index.html">
                            <i className="icon fa-solid fa-house"></i>Overview
                        </a>
                        <a 
                            onClick={() => handleClick(1)} 
                            id={selectedIndex === 1 ? 'selected' : ''} 
                            href="#index.html">
                            <i className="icon fa-solid fa-person"></i>Patients
                        </a>
                        <a 
                            onClick={() => handleClick(2)} 
                            id={selectedIndex === 2 ? 'selected' : ''} 
                            href="#index.html">
                            <i className="icon fa-solid fa-calendar"></i>Schedule
                        </a>
                        <a 
                            onClick={() => handleClick(3)} 
                            id={selectedIndex === 3 ? 'selected' : ''} 
                            href="#index.html">
                            <i className="icon fa-solid fa-message"></i>Message
                        </a>
                        <a 
                            onClick={() => handleClick(4)} 
                            id={selectedIndex === 4 ? 'selected' : ''} 
                            href="#index.html">
                            <i className="icon fa-solid fa-credit-card"></i>Transactions
                        </a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <a href="#index.html"><i className="icon fa-solid fa-bars"></i> Menu</a>
            </div>
            <div className='navbar-right'>
                <img src={doctor} alt="Doctor" />
                <div className='doc-info'>
                    <h3>Dr. Jose Simons</h3>
                    <h4>General Practitioner</h4>
                </div>
                <div className='line'></div>
                <img src={setting} alt="Settings" />
                <img src={more_v} alt="More Options" />
            </div>
        </header>
    );
};

export default Header;
