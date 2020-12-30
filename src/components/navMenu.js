import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


class NavMenu extends Component {


onClick = () => {
    const btn = document.getElementById("navi-toggle")
    btn.checked = false;
}

    render() {
      return (      
          <div className="navMenu"> 
            <div className="nav">
              <input type="checkbox" className="nav__checkbox" id="navi-toggle" />

              <label htmlFor="navi-toggle" className="nav__button">
                  <span className="nav__icon">
                    &nbsp;
                  </span>
              </label>

              <div className="nav__background">&nbsp;</div>
        
                <nav className="nav__nav" >
                  <ul className="nav__list" onClick={this.onClick}>
                    <li className="nav__item"><NavLink to="/" className="nav__links">Home</NavLink></li>
                    <li className="nav__item"><NavLink to="/contact" className="nav__links">Contact</NavLink></li>
                    <li className="nav__item"><NavLink to="/randomcolor" className="nav__links">Random Color</NavLink></li>
                    <li className="nav__item"><NavLink to="/randommeme" className="nav__links">Random Meme</NavLink></li>
                    <li className="nav__item"><NavLink to="/slideshow" className="nav__links">Slide Show</NavLink></li>
                    <li className="nav__item"><NavLink to="/timer" className="nav__links">Timer</NavLink></li>
                    <li className="nav__item"><NavLink to="/todo" className="nav__links">Todo</NavLink></li>
                  </ul>
                </nav>
             
            </div>
          </div> 
      );
    }
  }
   
  export default NavMenu;
