import React from 'react';
import Nav from '../../components/Nav'
import Button from '../../components/Button'
import img_home from '../../../public/img_home.png'
import './style.css';

function Home() {
    return (
        <>
            <Nav />
            <h1 className='intro__text'>Save your data storage here.</h1>
            <h3 className='intro__subtext'>
                Data Warehouse is a data storage area that has been
                tested for security, so you can store your data here
                safely but not be afraid of being stolen by others.
            </h3>
            <img className='img__home' src={img_home} alt="" />
            <Button text='Learn More' style='primary'></Button>
        </>
    )
}

export default Home;