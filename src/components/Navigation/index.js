import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css";

import profile from '../../assets/images/profile.png';
import resume_pdf from '../../assets/docs/resume.pdf';
import resume from '../../assets/images/resume.svg';
import linkedin from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';

const links = [
  {name: "Portfolio",path:"/"},
  {name: "Contact",path:"/contact"},
];

function Navigation() {
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className={style.header} closeButton>
          <Offcanvas.Title className={style.title}>Javier Brizuela</Offcanvas.Title>
        </Offcanvas.Header>
        <div className={style.profilePic}><img src={profile} alt="profile" /></div>
        <Offcanvas.Body className={style.canvasBody}>
          Systems Engineer with a diversified skill set including: 
          <ul>
            <li>Full stack Software and Web development, </li>
            <li>Windows Server/Network administration, </li>
            <li> Project Management, </li>
            <li>Helpdesk Support and Troubleshooting.</li>
          </ul>
          Work experience in multiple work environments:
          <ul>
            <li>College/Educational,</li>
            <li>Government/Military,</li>
            <li>Business/Consulting.</li>
          </ul>
        </Offcanvas.Body>
        <h4>Socia Networks</h4>
        <Footer />
      </Offcanvas>
        <ul className={style.navUl}>
          <li className={style.icon}>
          <a href="/">
            <img src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-api-computer-science-soft-fill-soft-fill-juicy-fish.png" 
            alt="Javier Brizuela"/></a>
          </li>
          {links.map((link,index) => (
            <li key={index}>
              <NavLink to={link.path} className={({ isActive }) => "links" + (isActive ? " active" : "")}>
                {link.name}
              </NavLink>
            </li>
          ))}
            <li>
              <NavLink onClick={handleShow} to="/about" className={({ isActive }) => "links" + (isActive ? " active" : "")}>
                About
              </NavLink>
            </li> 
        </ul>
    </>
  );
}

const Footer = (without) => {
	return(
    <>
    <div className={style.row}>
			<div className={style.column}>
				<a href={resume_pdf} without={without} rel="noopener noreferrer" target="_blank"><img src={resume} alt="resume" className={style.socialImg }/></a>
      </div>
      <div className={style.column}>
      <a href='https://www.linkedin.com/in/javier-brizuela-cr/' without={without} rel="noopener noreferrer" target="_blank"><img src={linkedin} alt="linkedin" className={style.socialImg }/></a>
      </div>
      <div className={style.column}>
      <a href='https://github.com/ticonetster' without={without} rel="noopener noreferrer" target="_blank"><img src={github} alt="github" className={style.socialImg }/></a>
      </div>
    </div>
    </>
	)
}

export default Navigation;