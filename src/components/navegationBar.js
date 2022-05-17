import React, { Component } from 'react';
import {  Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

class NavegationBar extends Component {
    render() {
        return (
            <Navigation>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/resume">Contact</Link>
                {/* <Link to="/Projects">Projects</Link> */}
                {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
        );
    }

}
export default NavegationBar;
