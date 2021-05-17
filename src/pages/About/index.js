import React from 'react';
import img_about from '../../../public/img_about.png'
import './style.css';

function About() {
    return (
        <div id='about'>
            <img src={img_about} alt="" />
            <div>
                <h1>We are a high-level data storage bank</h1>
                <p>
                    The place to store various data that you can access at any time through the
                    internet  and where you can carry it.
                    This very flexible storage area has a high level of security.
                    To enter into your own data you must enter the password that you
                    created when you registered in this Data Warehouse.
            </p>
            </div>
        </div>
    )
}

export default About;