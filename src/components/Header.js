import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <header style={headerStyle}>
            <h1>MediaList</h1>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#3333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
