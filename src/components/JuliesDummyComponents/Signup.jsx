import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	return (
		<div className="signup-nav signup">
			<Link to="/signup/vollunteer">
				<p>I am Vollunteer</p>
			</Link>
			<Link to="/signup/business">
				<p>I am a Business</p>
			</Link>
		</div>
	);
};

export default Signup;
