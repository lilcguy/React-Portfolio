// footer component.
// does what it says on the tin: renders the footer component of the application.

// styling can be done in this file if so desired. smile.

import React from 'react';

import '../components/styles/Footer.css';

export default function Footer() { //exporting and declaration/initialization of the function Footer is all done in a single line here.

    return (   
        <div id="footer" className="footer"> 
        <footer className="nav">
            <a 
            className="nav-link"
            href="https://github.com/lilcguy">GitHub</a> {/* maybe make this an icon for style points?*/}
            <a 
            className="nav-link"
            href="https://linkedin.com/in/colin-bradshaw-a81167270">LinkedIn</a>
            <a 
            className="nav-link"
            href="https://twitter.com/ColinBrads78373">Twitter</a> {/*ask a question about this. i dont have a twitter or stackOverflow. */}
        </footer>

        </div>

    );
}

