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

//note: content component may have nav rendered into it already in order to pass the props.
//if app has both the nav and content, there will be two navbars.
//note: <nav> is being rendered in Header component. in theory there will now be 3. remove from header.







*/