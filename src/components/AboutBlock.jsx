import React, { useState } from 'react';
import '../styles/AboutBlock.scss';
function AboutBlock() {
    const [skills, setSkills] = useState([
        { name: 'HTML5', score: 5 },
        { name: 'CSS3', score: 5 },
        { name: 'SASS', score: 5 },
        { name: 'JavaScript', score: 5 },
        { name: 'ES6', score: 5 },
        { name: 'Web Api', score: 5 },
        { name: 'Node', score: 5 },
        { name: 'Express', score: 5 },
        { name: 'Webpack', score: 3 },
        { name: 'React', score: 3 },
    ]);
    return (
        <div className='about-block'>
            <div className='skills'>
                <h3>Skills</h3>
                {skills.map((skill) => (
                    <div className='skill'>
                        <div>{skill.name}</div>
                        <div className='stars'>{'⭐'.repeat(skill.score)}</div>
                    </div>
                ))}
            </div>
            <div className='intro'>
                <h4>Nice to meet you</h4>
                <h1>
                    Hello, This is Mustafa<span>Mwafy</span>
                </h1>
                <h3>
                    Being Front-End developer is an amazing adventure full of
                    magic.
                </h3>
                <p>
                    Before anything i'm a linux user so i can work very
                    professionally with command line I have a great skills with
                    HTML5, CSS3 , SASS and Bootstrap so i can implement any
                    web-site design, also i can write web-apps using Javascript,
                    ES6 and React JS FrameWork. Also i skilled in using Web-API
                    and Asynchronous Javascript to implement any kind of API. I
                    can work with backend using Node and Express, and finally
                    connect everything using Webpack building tool and Git
                    service, also i'm using service workers to keep my web-app
                    working offline like an app.
                </p>
            </div>
        </div>
    );
}

export default AboutBlock;