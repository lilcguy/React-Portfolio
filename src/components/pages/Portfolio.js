//portfolio content component that will use the Project component to render each project.
//it will take the following params: title, imagePath, deployLink, repoLink


import React from 'react';

import Project from '../../components/Project';

//add to this array of objects to add a new project to the portfolio. the project.js components maps over this
// array to display each one.
const projects = [
    {
        title: "Command Line Employee Tracker",
        image: "et.png",
        alt: "employee tracker",
        deployLink: "https://drive.google.com/file/d/18sardReenpn6yWyrTfblt9SEYIn9xQ6y/view",
        repoLink: "https://github.com/lilcguy/Employee-Tracker",
        

    },
    {
        title: "My Animal List",
        image: "mal.png",
        alt: "my animal list",
        deployLink: "http://my-animal-list.herokuapp.com/",
        repoLink: "https://github.com/salenaoneill/my-animal-list"
    },
    {
        title: "Eat Drink Be Merry",
        image: "edm.png",
        alt: "eat drink be merry",
        deployLink: "https://wir3s.github.io/eat-drink-be-merry/",
        repoLink: "https://github.com/lilcguy/eat-drink-be-merry"
    },
    {
        title: "Social Network API",
        image: "snp.png",
        alt: "social network API",
        deployLink: "https://drive.google.com/file/d/159CTmF05kQpWfFsdmMkUzRiQhuen7uFQ/view",
        repoLink: "https://github.com/lilcguy/Social-Network-API"
    },
    {
        title: "E-Commerce Backend",
        image: "ecbn.png",
        alt: "e-commerce backend",
        deployLink: "https://gyazo.com/309c99bcfab29e52f0bbef2f5bbedeba",
        repoLink: "https://github.com/lilcguy/E-Commerce-Backend"
    },
    {
        title: "Command Line Team Profile Generator",
        image: "tpg.png",
        alt: "team profile generator",
        deployLink: "https://drive.google.com/file/d/1sxjc5A-gRLzdpHFWFyKOPkkYDoIPQJ1Q/view",
        repoLink: "https://github.com/lilcguy/Team-Profile-Generator"
    },
    {
        title: "Happy Camper",
        image: "hc.png",
        alt: "happy camper",
        deployLink: "https://happy-camper12345.herokuapp.com/",
        repoLink:"https://github.com/CBshmear/big-ole-3",

    }


]


export default function Portfolio() {
    return (

        <Project projects={projects}/> 
    );


}

/* it returns a Project component for each project.*/

// https://lilcguy.github.io/5-Day-Weather-Forecast/ 
// https://github.com/lilcguy 