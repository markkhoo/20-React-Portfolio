import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    return (
        <div className="header">
            <h1>Mark Khoo</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
};

export default Header;