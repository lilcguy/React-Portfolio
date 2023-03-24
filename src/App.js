//This is where all of the magic happens. This is the main hub of the application: all components are imported here
//then in the return method inside the App() function, we add all the components we want to render on the screen.

import React from 'react';

import Footer from './components/Footer'; 
import Header from './components/Header';
import Content from './components/Content'; //renders navbar, which handles navigation, handles content display.


export default function App() {
    return (
        <div>
            <div id="header"> {/* header renders the navbar inside it.*/}
                <Header />
            </div>

            <div id="content">
                <Content />

            </div>

            <div id="footer">
                <Footer />
            </div>
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