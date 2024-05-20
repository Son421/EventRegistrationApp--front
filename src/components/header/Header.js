import React from 'react';
import { NavLink } from "react-router-dom";
import './header.css'

export default function Header(){

    return(
        <div>
            <header className='header'>
                <NavLink to={'/'}><button className='header__button'> Events </button> </NavLink>
            </header>
        </div>
    )
}