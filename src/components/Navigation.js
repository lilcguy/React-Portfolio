//nav bar component. This will have conditionals based on what page the user is on to render 
    //see activity 24 portfolioContainer
// elements of the navbar, and highlight the navbar 
// this component is exported to the Header component.

import React, {useState} from 'react';

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('About Me'); //about me serves as the landing page

    const renderPage =(page) => {
        if (currentPage === 'About Me') {
            return <About />
        }

    }

    return (
        <div className="navbar">
            <nav>
                <a>About Me</a> {/* these will take onClick attributes to handle the page changing with a function*/}
                <a>Portfolio</a>
                <a>Contact</a>
                <a>Resume</a> 

            </nav>
        </div>
    );
}


