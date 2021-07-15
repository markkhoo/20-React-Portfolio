import React, { useState } from 'react';
import Card from '../../components/projectCard/projectCard';
import './projects.css';

function Projects() {
    const [getProj, setProj] = useState([
        {
            id: 1,
            title: "Sporcle-But-Better",
            github_link: "https://github.com/markkhoo/Sporcle-But-Better",
            deploy_link: "https://radiant-chamber-32939.herokuapp.com/",
            description: "A quiz game that tests your knowledge of world capitals.",
            technologies: "JavaScript, MySQL, HandleBars"
        },
        {
            id: 2,
            title: "Trail-Scout",
            github_link: "https://github.com/markkhoo/Trail-Scout",
            deploy_link: "https://markkhoo.github.io/Trail-Scout/",
            description: "Search for hiking and biking trails by the nearest town with accompanying weather and air quality.",
            technologies: "JavaScript, JQuery, Bulma"
        },
        {
            id: 3,
            title: "Employee-Director",
            github_link: "https://github.com/markkhoo/19-employee-directory",
            deploy_link: "https://markkhoo.github.io/19-employee-directory/",
            description: "An example of a basic employee directory.",
            technologies: "JavaScript, React.js"
        },
        {
            id: 4,
            title: "Clicky-Game",
            github_link: "https://github.com/markkhoo/18-Clicky-Game",
            deploy_link: "https://markkhoo.github.io/18-Clicky-Game/",
            description: "A simple 12 card memory game.",
            technologies: "JavaScript, React.js"
        },
        {
            id: 5,
            title: "Note-Taker",
            github_link: "https://github.com/markkhoo/11-Note-Taker-Express.js",
            deploy_link: "https://mighty-dusk-98751.herokuapp.com/",
            description: "A simple note take app that allows user to write, save and delete notes.",
            technologies: "JavaScript, Node.js, Express"
        },
        {
            id: 6,
            title: "Quiz-Game",
            github_link: "https://github.com/markkhoo/04-Code-Quiz-Assignment",
            deploy_link: "https://markkhoo.github.io/04-Code-Quiz-Assignment/",
            description: "A simple trivia game.",
            technologies: "JavaScript, HTML5, CSS3"
        }
    ]);

    return (
        <div className="scroller">
            <div className="projects">
                {getProj.map(item => {
                    return (
                        <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            deploy_link={item.deploy_link}
                            github_link={item.github_link}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default Projects;