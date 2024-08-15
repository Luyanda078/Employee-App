import React from 'react';
import Logo from "./logo-search-grid-2x.png"

const navbar = () =>{
    return (
        <>
        <nav className="nav">
            <img src={Logo} alt="logo" className="logo" />
            <ul className="list">
                <li>Home Page</li>
                <li>About Page</li>
                <li>Contact Us</li>
            </ul>

        </nav>
        </>
    )
}

export default navbar