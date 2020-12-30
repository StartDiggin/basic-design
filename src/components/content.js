import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './navigation';
// pages 
import Contact from './Contact/contact';
import RandomColor from './RandomColor/randomcolor';
import RandomMeme from './RandomMeme/randommeme';
import Slideshow from './SlideShow/slideshow';
import Timer from './Timer/timer';
import Todo from './Todo/todo';
import Error from './error';

import Home from './home';



class Content extends Component {
    
    render(){
        return(
            <section className="nav_content">
                <BrowserRouter>
                    <Navigation />
                    <div className="content">
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/contact" component={Contact} />
                            <Route path="/randomcolor" component={RandomColor} />
                            <Route path="/randommeme" component={RandomMeme} />
                            <Route path="/slideshow" component={Slideshow} />
                            <Route path="/timer" component={Timer} />
                            <Route path="/todo" component={Todo} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </section>
        )
    }
}

export default Content;