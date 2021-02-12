import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton>
            <PersonIcon fontSize = "large" className ="header__icon"/>
            </IconButton>

            <img className="header__logo" src="https://www.globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png" alt=""/>

            
            
        </div>
    );
}

export default Header;
