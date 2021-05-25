import React from 'react';
import './projectCard.css';

function Card(props) {
    return(
        <div className="card" id={props.id}>
            <h2>{props.title}</h2>
            <a href={props.deploy_link} target="_blank" rel="noreferrer noopener">Deployed</a>
            <a href={props.github_link} target="_blank" rel="noreferrer noopener">GitHub</a>
        </div>
    )
};

export default Card;