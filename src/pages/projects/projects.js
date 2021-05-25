import React, { useState } from 'react';
import Card from '../../components/projectCard/projectCard';
import './projects.css';

function Projects(){
    const [getProj, setProj] = useState([
        {
            id: 1,
            title: "Sporcle-But-Better",
            deploy_link: "https://github.com/markkhoo/Sporcle-But-Better",
            github_link: "https://radiant-chamber-32939.herokuapp.com/",
        },
        {
            id: 2,
            title: "Trail-Scout",
            deploy_link: "https://github.com/markkhoo/Trail-Scout",
            github_link: "https://markkhoo.github.io/Trail-Scout/",
        },
        {
            id: 3,
            title: "Employee-Director",
            deploy_link: "https://github.com/markkhoo/19-employee-directory",
            github_link: "https://markkhoo.github.io/19-employee-directory/",
        },
        {
            id: 4,
            title: "Clicky-Game",
            deploy_link: "https://github.com/markkhoo/18-Clicky-Game",
            github_link: "https://markkhoo.github.io/18-Clicky-Game/",
        },
        {
            id: 5,
            title: "Note-Taker",
            deploy_link: "https://github.com/markkhoo/11-Note-Taker-Express.js",
            github_link: "https://mighty-dusk-98751.herokuapp.com/",
        },
        {
            id: 6,
            title: "Quiz-Game",
            deploy_link: "https://github.com/markkhoo/04-Code-Quiz-Assignment",
            github_link: "https://markkhoo.github.io/04-Code-Quiz-Assignment/",
        }
    ]);

    return (
        <div className="projects">
            {getProj.map(item => {
                return (
                    <Card 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        deploy_link={item.deploy_link}
                        github={item.github_link}
                    />
                )
            })}
        </div>
    )
};

export default Projects;