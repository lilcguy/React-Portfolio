//component for contact content.

import React from 'react';

import '../styles/Content-body.css';

export default function Contact() {
    return (
        <div className="body"> 
            <h1>Contact Me!</h1>
            <textarea required>Your Name</textarea>
            <textarea required>Your Email</textarea>
            <textarea required>Message</textarea>

        </div>
    )
}


//placeholders to be styled.

// email must be validated: regex
// state update for inputs to alert user that form is required if they leave the box
// see previous activities...