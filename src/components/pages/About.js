//about page. this is the content piece of the 3 piece pie:
// HEADER - CONTENT - FOOTER. these pages will be conditionally rendered through the Navigation.js component.

import React from 'react';

import '../styles/Content-body.css';

export default function About() {
    return (
     <div className="body">
        <h1>About Page</h1>
        <img className='stuff 'src='avatar.jpg'></img>
        <p>
          Hello! My name is Colin. 
          What started as a shot in the dark based on interests from when I was younger has turned into a fascination with technology and programming.
          I enjoy the satisfaction of solving problems and I am seeking opportunities to start my career.
        </p>
    </div>
    
    );
}

//PLACEHOLDER TEXT FOR NOW.