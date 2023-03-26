//resume page content component.

import React from 'react';

import '../styles/Content-body.css';

export default function Resume() {
    return (
        <div className="body">
            <div >
                <h1>Proficiencies</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>APIs</li>
                    <li>MYSQL</li>
                    <li>Sequelize</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>React</li>
                </ul>
            
            </div>
                <div className="resume">
                    <h1>My Resume</h1>
                    <a href="../../../Assets\20-react-homework-demo-01.gif" download="testFilename">Download</a>

                </div>
        </div>
    );
}

// place holder informaiton.

