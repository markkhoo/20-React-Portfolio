import React, { useState, useEffect } from 'react';
import DayJS from 'react-dayjs';
import './home.css';
import ProfilePic from './MarkKhoo.png';

function Home(){
    const [getDays, setDays] = useState(0);

    // useEffect(() => {

    // }, [getDays]);

    // const interval = setInterval(() => {
    //     setDays(dayjs().diff(dayjs(1615262400000),'day',true));
    // },100);

    return (
        <div className="home">
            <img src={ProfilePic} alt="Profile Photo"/>
            <p>
                I am a former Construction Engineer EIT based out in Emeryville, California. I was last seen designing Falsework for the Los Angeles County Museum of Art that spans over Wilshire Boulevard. Now, I am an up and coming full stack developer. It has been <span>{getDays}</span> days since I began my journey coding. Coding really scratches that creative and problem-solving itch. I strive to be, at the very least, a full-stack dilettante and insatialble learner. Where will I be next?
            </p>
        </div>
    )
};

export default Home;