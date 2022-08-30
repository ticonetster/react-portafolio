import React, { Component } from 'react';
import {Routes, Route, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import ContactMe from '../../components/ContactMe';
import Portfolio from '../../components/Portfolio';
//import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
        return (
            <HashRouter>
                <About />
                <div className="row Header" id="header">
                    <a href="https://github.com/ticonetster/react-portfolio"><img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-api-computer-science-soft-fill-soft-fill-juicy-fish.png" alt="Javier Brizuela" className="icon" id="tech"/></a>
                    {<Navigation/>}
                </div>
                <div className="content">
                    <Routes>
                        <Route exact strict path="/contact" element={<ContactMe />} />
                        <Route exact strict path="/" element={<Portfolio />} />
                        {/* 👇️ only match this when no other routes match */}
                        <Route path="*" element={ <div><h2>404 Page not found</h2></div>}/>
                    </Routes>
                </div>
            </HashRouter>
        )
    }
}
export default Header;