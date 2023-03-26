//nav bar component. This will have conditionals based on what page the user is on to render 
    //see activity 24 portfolioContainer
// elements of the navbar, and highlight the navbar 
// this component is exported to the Header component.

import React from 'react';

import '../components/styles/Navigation.css';

export default function Navigation({currentPage, handlePageChange}) {

        //from Content.js component, takes the props currentPage variable value, and the function
        //handlePageChange.

    return (
        <div className="nav-color">
            <nav className="nav nav-tabs">
                <a
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                href="#about"
                onClick={() => handlePageChange('About')}>About Me</a> {/* these will take onClick attributes to handle the page changing with a function*/}
                <a 
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                <a
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                href="#contact"
                onClick={() => handlePageChange('Contact')}>Contact</a>
                <a
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
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