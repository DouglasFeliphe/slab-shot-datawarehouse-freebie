import React from 'react';
import Button from '../Button';
import './style.css';

const nav_items = [
    "About",
    "Help",
    "Features",
    "Signup",
]

function Nav() {
    return (
        <nav>
            <svg width="49" height="35" viewBox="0 0 49 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="15" width="20" height="20" rx="10" fill="#9C69E2" />
                <rect x="29" width="20" height="35" rx="10" fill="#F063B8" />
            </svg>

            <div className="nav__menu">
                {nav_items.map((item, index) => (
                    <a key={index}
                        href={`#${item}`}>
                        {item}
                    </a>
                ))}
            </div>

            <div className='nav__button'>
                <Button text='Request Demo' icon />
            </div>
        </nav>
    )
}

export default Nav;