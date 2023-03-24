// this component conditionally renders the content on the page with the help of the Navigation.js component


import React, {useState} from 'react';

import Nav from './Navigation';

export default function Content() {

    const [currentPage, setCurrentPage] = useState('About'); //about me serves as the default landing page.

//this function handles navigation with conditional page rendering.
    const renderPage =() => { 
        if (currentPage === 'About') {
            return <About />
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

