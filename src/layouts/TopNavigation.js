import React from 'react'

import '../styles/App.css';

// function for droping the menu on click (for mobile)
const menuActive = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active')
}

const TopNavigation = () => {
    return (
        <div className="top-navigation-wrapper">
            <span className="brand-logo">sunnyside</span>
            <nav className='navigation'>
                <ul>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Project</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
            <svg onClick={menuActive} className="hamburger-icon" width="24" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd" /></svg>
        </div>
    );
}

export default TopNavigation;