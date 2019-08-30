import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLogout = props => {
	console.log(props);

	const handleClick = e => {
		e.preventDefault();
		window.localStorage.removeItem('token');
		window.localStorage.removeItem('user');
		props.history.push('/login');
	};

	return (
		<div className="navbar-logout">
			<div className="nav-content">
				<div className="nav-logo">replate</div>
				<div className="nav-links">
					<NavLink onClick={handleClick} to="/logout" className="nav-link" activeClassName="nav-link-active">
						Logout
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavBarLogout;
