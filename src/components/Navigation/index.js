import React from 'react';
import {NavLink} from "react-router-dom";
import "./styles.css";

function Navigation(props) {   
  return (
    <div className=" row navigation" id="navigation">
        <NavLink end to="/">Portfolio</NavLink>
        <NavLink end className={({ isActive }) => (isActive ? "custom-active" : undefined)} to="/contact">Contact Me</NavLink>
    </div>
  );
}

export default Navigation;