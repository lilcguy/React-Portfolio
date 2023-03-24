// footer component.
// does what it says on the tin: renders the footer component of the application.

// styling can be done in this file if so desired. smile.

import React from 'react';

export default function Footer() { //exporting and declaration/initialization of the function Footer is all done in a single line here.

    return (   
        <div className="footer"> 
        <footer>
            <a href="https://github.com/lilcguy">GitHub</a> {/* maybe make this an icon for style points?*/}
            <a href="">LinkedIn</a>
            <a href="">Third platform</a> {/*ask a question about this. i dont have a twitter or stackOverflow. */}
        </footer>

        </div>

    );
}

