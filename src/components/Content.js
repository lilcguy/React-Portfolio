// this component conditionally renders the content on the page with the help of the Navigation.js component.
    //navigation sets the value of currentPage with handlePageChange with the onClick attributes added
    //to the links in the navbar. in this component, currentPage's value is checked with renderPage and the 
    //corresponding content page is rendered.


import React, {useState} from 'react';

import Nav from './Navigation';

//content pages imports
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
//content pages imports


export default function Content() {

    const [currentPage, setCurrentPage] = useState('About'); //about me serves as the default landing page.

//this function handles navigation with conditional page rendering.
    const renderPage =() => { 
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }

    }

//this function handles setting the currentPage variable and is used in Navigation component.
    function handlePageChange(page) {
        setCurrentPage(page); //sets the state of currentPage.
        
    }

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/> 
            {renderPage()}
        </div>
    )
}

