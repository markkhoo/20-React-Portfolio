import React from 'react';
import './contact.css';

function Contact(){
    return (
        <div className="contact">
            <a id="email" href="mailto:markkhoo95@gmail.com">Email</a>
            <a id="linkd" href="https://www.linkedin.com/in/markdkhoo/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a id="githb" href="https://github.com/markkhoo" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a id="resum" href="https://drive.google.com/file/d/1JwhgLJOY85eWk2_apCtkArAgrdMCCsm0/view?usp=sharing" target="_blank" rel="noreferrer noopener">RESUME</a>
        </div>
    )
};

export default Contact;

// Empty Character: {String.fromCharCode(32)}