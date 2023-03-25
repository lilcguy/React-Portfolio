//portfolio content component that will use the Project component to render each project.
//it will take the following params: title, imagePath, deployLink, repoLink


import React from 'react';

import Project from '../../components/Project';

//add to this array of objects to add a new project to the portfolio. the project.js components maps over this
// array to display each one.
const projects = [
    {
        title: "5 Day Forecast",
        image: "placeholder.jpg",
        deployLink: "https://lilcguy.github.io/5-Day-Weather-Forecast/",
        repoLink: "https://github.com/lilcguy",
        icon: "github.png"

    },
    {
        title: "placeholder2",
        image: "placeholder.jpg",
        deployLink: "https://lilcguy.github.io/5-Day-Weather-Forecast/",
        repoLink: "https://github.com/lilcguy"
    },
    {
        title: "placeholder3",
        image: "placeholder.jpg",
        deployLink: "https://lilcguy.github.io/5-Day-Weather-Forecast/",
        repoLink: "https://github.com/lilcguy"
    },
    {
        title: "placeholder4",
        image: "placeholder.jpg",
        deployLink: "https://lilcguy.github.io/5-Day-Weather-Forecast/",
        repoLink: "https://github.com/lilcguy"
    },


]


export default function Portfolio() {
    return (

        <Project projects={projects}/> 
    );


}

/* it returns a Project component for each project.*/

// https://lilcguy.github.io/5-Day-Weather-Forecast/ 
// https://github.com/lilcguy 