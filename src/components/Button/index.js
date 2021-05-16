import React from 'react';
import './style.css';
import { IconArrowLeft } from '../../svg/IconArrowLeft'

export default function Button(props) {
    return (
        <button className={`btn ${props.style}`}>
            {props.text}
            {props.icon && <IconArrowLeft />}
        </button>
    )
}

