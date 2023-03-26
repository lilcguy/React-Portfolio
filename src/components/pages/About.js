//about page. this is the content piece of the 3 piece pie:
// HEADER - CONTENT - FOOTER. these pages will be conditionally rendered through the Navigation.js component.

import React from 'react';

import '../styles/Content-body.css';

export default function About() {
    return (
     <div className="body">
        <h1>About Page</h1>
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
    </div>
    
    );
}

//PLACEHOLDER TEXT FOR NOW.