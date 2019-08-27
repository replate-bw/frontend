import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const VollunteerDashboard = props => {
	const id = props.match.params.id;

	const { user, setUser } = useContext(UserContext);
	console.log(user, 'this is the vollunteer user');

	return (
		<div>
			<h1>Vollunteer Dashboard</h1>
			{!user ? <div>Loading...</div> : user.accountType}
		</div>
	);
};

export default VollunteerDashboard;
