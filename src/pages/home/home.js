import React, { useState, useEffect } from 'react';
import './home.css';
import ProfilePic from './MarkKhoo.png';

function Home(){
    const [getDays, setDays] = useState("???");

    useEffect(() => {
        const d = new Date().getTime();
        setDays(Math.floor((d - 1615262400000) / (24*60*60*1000)));
        const interval2 = setInterval(() => {
            setDays(Math.floor((d - 1615262400000) / (24*60*60*1000)));
        },1000);
        return () => clearInterval(interval2)
        // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
    }, [])

    return (
        <div className="home">
            <img src={ProfilePic} alt="My Headshot"/>
            <p>
                I am a former Construction Engineer EIT based out in Emeryville, California. I was last seen designing Falsework for the Los Angeles County Museum of Art that spans over Wilshire Boulevard. Now, I am an up and coming full stack developer. It has been <span>{getDays}</span> days since I began my journey coding. Coding really scratches that creative and problem-solving itch. I strive to be, at the very least, a full-stack dilettante and insatialble learner. Where will I be next?
            </p>
        </div>
    )
};

export default Home;