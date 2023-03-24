//nav bar component. This will have conditionals based on what page the user is on to render 
    //activity 24 portfolioContainer
// elements of the navbar, and highlight the navbar 
// this component is exported to the Header component.

import React from 'react';

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage =() => {
        
    }

    return (
        <div className="navbar">
            <nav>
                <a>About Me</a>
                <a>Portfolio</a>
                <a>Contact</a>
                <a>Resume</a> 

            </nav>
        </div>
    );
}


