// the project component will be created once and used repeatedly to create the portfolio section,
//found in the pages/Portfolio.js component.

//it will take the following params: title, imagePath, deployLink, repoLink
//and pass them as props?


import React from 'react';


export default function Project(props) {
return (
<div className="d-flex container grid">
    <ul className=" d-flex flex-row gap-5 row ">
        {props.projects.map(item => (
            <li className="d-flex card col gap-2 text-center ">
                <h1>{item.title}</h1>
                <img className="justify-content-center h-50 w-50" src={item.image}></img>
                <a className="btn btn-primary" href={item.deployLink}>Deployed Application</a>
                <a className="btn btn-primary" href={item.repoLink}>GitHub</a>
            </li>
        ))}
    </ul>

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