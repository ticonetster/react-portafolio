import React, { Component } from 'react';
import {Routes, Route, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import ContactMe from '../../components/ContactMe';
import Portfolio from '../../components/Portfolio';
//import Resume from '../../components/Resume';

class Header extends Component {   
    render() {
        return (
            <HashRouter>
                {<Navigation />}
                <div className="content">
                    <Routes>
                        <Route exact strict path="contact" element={<ContactMe />} />
                        <Route exact strict path="/" element={<Portfolio />} />
                        <Route exact strict path="/about" element={<Portfolio />} />
                        {/* 👇️ only match this when no other routes match */}
                        <Route path="*" element={ <div><h2>404 Page not found</h2></div>}/>
                    </Routes>
                </div>
            </HashRouter>
        )
    }
}
export default Header;