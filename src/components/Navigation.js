//nav bar component. This will have conditionals based on what page the user is on to render 
    //see activity 24 portfolioContainer
// elements of the navbar, and highlight the navbar 
// this component is exported to the Header component.

import React from 'react';

export default function Navigation({currentPage, handlePageChange}) {

        //from Content.js component, takes the props currentPage variable value, and the function
        //handlePageChange.

    return (
        <div className="navbar">
            <nav>
                <a
                href="#about"
                onClick={() => handlePageChange('About')}>About Me</a> {/* these will take onClick attributes to handle the page changing with a function*/}
                <a>Portfolio</a>
                <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}>Contact</a>
                <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}>Resume</a> 

            </nav>
        </div>
    );
}


//probably obsolete comments below - why? because it's all being handled in this component.
// this page handles setting the state of currentPage.
// somewhere that will be taken in as a prop to conditionally render about, portfolio, etc.
// export currentPage as a prop...


//add ternnary conditions in the JSX for current page highlighting in tab.
    // in theory, just use the currentPage variable to check it.