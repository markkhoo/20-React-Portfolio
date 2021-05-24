import React from 'react';
import './contact.css';

function Contact(){
    return (
        <div className="contact">
            <a id="email" href="mailto:markkhoo95@gmail.com">{String.fromCharCode(32)}</a>
            <a id="linkd" href="https://www.linkedin.com/in/markdkhoo/" target="_blank" rel="noreferrer noopener">{String.fromCharCode(32)}</a>
            <a id="githb" href="https://github.com/markkhoo" target="_blank" rel="noreferrer noopener">{String.fromCharCode(32)}</a>
            <a id="resum" href="https://drive.google.com/file/d/1GAoY4YpH1W7qby-to_XkX3vl1zGOhbp5/view?usp=sharing" target="_blank" rel="noreferrer noopener">RESUME</a>
        </div>
    )
};

export default Contact;