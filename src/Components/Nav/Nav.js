import React from 'react';
import {Route, Link} from 'react-router-dom';

function Nav() {
    return (
        <>
            <Link to='/Beginner'><p className='nav-text'>Preset List</p></Link>
            <Link to='/Intermediate'><p className='nav-text'>Make your own</p></Link>
            <Link to='/Advanced'><p className='nav-text'>Advanced</p></Link>
        </>
    )
}

export default Nav;