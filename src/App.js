//This is where all of the magic happens. This is the main hub of the application: all components are imported here
//then in the return method inside the App() function, we add all the components we want to render on the screen.

import React from 'react';

import Footer from './components/Footer'; 

export default function App() {
    return (

        <div id="footer">
            <Footer />
        </div>
    );
}




/* 

export default function App(){
    return (

        <Header />
            <Nav /> <--- in theory this is where the rendering for below happens.
                <content> <-- this is rendered based on Nav above.
        <Footer />
    )
}







*/