// header component.
//dev name, navigation
//navigation component will be rendered inside this component's return method.



import React from 'react';

import Nav from './Navigation';

function Header() {
    return (
    <div className="header">
        <header>
            <h1>Colin Bradshaw</h1>
            <Nav />
        </header>
    </div>
    );
}


export default Header;