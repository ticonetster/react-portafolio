import React from 'react';
import { Link } from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component';

import profile from '../../assets/images/profile.png';
import resume from '../../assets/images/resume.svg';
import linkedin from '../../assets/images/linkedin.svg';
import stackoverflow from '../../assets/images/stack-overflow.svg';

function Menu({location}) {
	return(
		<OffcanvasMenu
			Link={Link}
			location={location}
			config={{
				push: true
			}}
			menu={[
				{text: 'Javier Brizuela', link: '/'},
				{text: 'Systems Engineer with a diversified skill set including: Full stack Software and Web development, Windows Server/Network administration, Project Management, Helpdesk Support and Troubleshooting. Work experience in multiple work environments: College/Educational, Government/Military, Business/Consulting.', link: '/'}
			]}
			header={
				<img src={profile} alt="profile" />
			}
			footer={<Footer />}
		/>
	)
}

const Footer = () => {
	return(
		<div className="social-wrap">
			<h4>Socia Networks Footer</h4>
			<ul className="social">
				<li>
					<img src={resume} alt="resume" />
                </li>
				<li>
					<img src={linkedin} alt="linkedin" />
				</li>
				<li>
					<img src={stackoverflow} alt="stackoverflow" />
				</li>
			</ul>
		</div>
	)
}

export default Menu;