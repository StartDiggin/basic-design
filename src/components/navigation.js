import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavMenu extends Component {

    render(){
        return(
            <section className="navigation">
                <div className="u-center-vh-text">
                    <ul className="navigation__menu">
                        <NavLink to="/" className="navigation__links">Home</NavLink>
                        <NavLink to="/contact" className="navigation__links">Contact</NavLink>
                        <NavLink to="/randomcolor" className="navigation__links">Random Color</NavLink>
                        <NavLink to="/randommeme" className="navigation__links">Random Meme</NavLink>
                        <NavLink to="/slideshow" className="navigation__links">Slide Show</NavLink>
                        <NavLink to="/timer" className="navigation__links">Timer</NavLink>
                        <NavLink to="/todo" className="navigation__links">Todo</NavLink>
                    </ul>
                </div>
            </section>
        )
    }
}

export default NavMenu;