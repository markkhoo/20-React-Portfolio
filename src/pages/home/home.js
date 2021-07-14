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
        return () => clearInterval(interval2);
        // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
    }, [])

    return (
        <div className="home">
            <img src={ProfilePic} alt="My Headshot"/>
            <p>
                I am a Full-Stack Web Developer based out in Emeryville, California. My experience in civil engineering and construction design has prepared me to create practical software architecture and high-quality responsive web applications. Earned a certificate in full-stack web development from the University California Berkeley Extension in June 2021, with knowledge in HTML5, CSS3, JavaScript, React.js, responsive web design, and more. It has been <span>{getDays}</span> days since I began my journey coding. 
                <br/><br/>
                My goal for every project is to produce user-facing interfaces that are comfortable to navigate and efficient for people to interact with. I worked on a team of four to develop a <a href="https://github.com/markkhoo/Contextual-Twit" target="_blank" rel="noreferrer noopener">MERN stack application</a> that helps influencers or marketing researchers analyze tweets searched by query for sentiment data. I am eager to use my skills and problem solving ability in a quality oriented team to build competitive web experiences.
                <br/><br/>
                I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Reach out to me to chat about our next project <a href="mailto:markdkhoo@gmail.com">HERE</a>.
            </p>
        </div>
    )
};

export default Home;