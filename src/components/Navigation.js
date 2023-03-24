//nav bar component. This will have conditionals based on what page the user is on to render 
    //see activity 24 portfolioContainer
// elements of the navbar, and highlight the navbar 
// this component is exported to the Header component.

import React, {useState} from 'react';

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('About'); //about me serves as the landing page

    const renderPage =(page) => { //this function handles navigation with conditional page rendering.
        if (page === 'About') {
            return <About />
        }

    }

    function handlePageChange(page) {
        setCurrentPage(page); //set the state of currentPage to param
        renderPage(page); //run this function to check that and render the corresponding component.
    }

    return (
        <div className="navbar">
            <nav>
                <a
                href="#about"
                onClick={() => handlePageChange('About')}>About Me</a> {/* these will take onClick attributes to handle the page changing with a function*/}
                <a>Portfolio</a>
                <a>Contact</a>
                <a>Resume</a> 

            </nav>
        </div>
    );
}


// this page handles setting the state of currentPage.
// somewhere that will be taken in as a prop to conditionally render about, portfolio, etc.
// export currentPage as a prop...

//add ternnary conditions in the JSX for current page highlighting in tab.
    // in theory, just use the currentPage variable to check it.