import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header(){
    // States for Name animation
    const [getName, setName] = useState("");
    const [getTick, setTick] = useState("_");

    // Animate name on load
    useEffect(() => {
        const myName = ["", "M", "Ma", "Mar", "Mark", "Mark ", "Mark K", "Mark Kh", "Mark Kho", "Mark Khoo"];
        let nameTime = 0;

        const interval = setInterval(() => {
            if(nameTime < myName.length){
                setName(myName[nameTime]);
            } else if (nameTime >= myName.length + 5) {
                setTick("");
                clearInterval(interval);
            };
            nameTime += 1;
        }, randInt(75, 200));
    }, []);

    const randInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    return (
        <div className="header">
            <h1>{getName + getTick}</h1>
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