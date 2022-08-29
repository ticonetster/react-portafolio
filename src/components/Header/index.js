import React, { Component } from 'react';
import {Route, Navigate, Routes, BrowserRouter} from "react-router-dom";
//import Navigation from '../../components/Navigation';
import About from '../../components/About';
//import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
//import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
        return (
            <BrowserRouter>
                <About />
                <div className="row Header" id="header">
                    <a href="https://github.com/ticonetster/react-portfolio"><img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-api-computer-science-soft-fill-soft-fill-juicy-fish.png" alt="Javier Brizuela" className="icon" id="tech"/></a>
                    {/*<Navigation/>*/}
                </div>
                <Portfolio />
                <div className="content">
                    <Routes>
                        <Route path="/portfolio" component={Portfolio}/>
                        <Route path="/about" component={About}/>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
export default Header;