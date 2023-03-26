//component for contact content.

import React from 'react';

import '../styles/Content-body.css';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <div className="body"> 
            <h1 className="h1">Contact Me!</h1>
            <div className="forms-parent">
                <textarea className="form">Your Name</textarea>
                <textarea className="form">Your Email</textarea>
                <textarea className="msg-form">Message</textarea>
            </div>
            <h2 className="h1">999-999-9999</h2>
            <h2 className="h1">thecbradshaw89@gmail.com</h2>
            
        </div>
    )
}


//placeholders to be styled.

// email must be validated: regex
// state update for inputs to alert user that form is required if they leave the box
// see previous activities...