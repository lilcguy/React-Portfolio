// the project component will be created once and used repeatedly to create the portfolio section,
//found in the pages/Portfolio.js component.

//it will take the following params: title, imagePath, deployLink, repoLink
//and pass them as props?


import React from 'react';

import '../components/styles/Project.css';


export default function Project(props) {
return (
<div className="content-background">
    <div className="card-parent">
        {props.projects.map(item => (
            <div className="card-me">
                <h1>{item.title}</h1>
                <img className="img" src={item.image} alt={item.alt}></img>
                <div>
                    <a className="" href={item.deployLink}>Deployed Application/Walkthrough</a>
                    <div>
                        <a className="" href={item.repoLink}>GitHub Repository</a>
                    </div>
                </div>
            </div>
        ))}
    </div>

</div>
);
}

// https://lilcguy.github.io/5-Day-Weather-Forecast/ 
// https://github.com/lilcguy 

//map over props received, which will be an array of objects]

/*

item.image will eventually be <img src={item.image}>


in project.js,
make the links to the repo and deploys actual links, and make them 'Repo' and 'Deployed Application' links.
*/