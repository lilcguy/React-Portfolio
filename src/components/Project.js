// the project component will be created once and used repeatedly to create the portfolio section,
//found in the pages/Portfolio.js component.

//it will take the following params: title, imagePath, deployLink, repoLink
//and pass them as props?


import React from 'react';


export default function Project(props) {

<div>
    <ul>
        {props.projects.map(item => (
            <li>
                <h1>{item.title}</h1>
                <h3>{item.image}</h3>
                <h3>{item.deployLink}</h3>
                <h3>{item.repoLink}</h3>
            </li>
        ))}
    </ul>

</div>

}

// https://lilcguy.github.io/5-Day-Weather-Forecast/ 
// https://github.com/lilcguy 

//map over props received, which will be an array of objects