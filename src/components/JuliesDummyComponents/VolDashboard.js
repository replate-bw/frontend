import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const VolunteerDashboard = props => {
	const id = props.match.params.id;

	const { user, setUser } = useContext(UserContext);
	console.log(user, 'this is the volunteer user');

	return (
		<div>
			<h1>Volunteer Dashboard</h1>
			{!user ? (
				<div>Loading...</div>
			) : (
				<div className="dummy-volDashboard">
					<p>Account Type: {user.accountType}</p>
					<p>First Name: {user.contact.firstName}</p>
					<p>Last Name: {user.contact.lastName}</p>

					<p>Email: {user.email}</p>
					<p>Address: {user.address}</p>
					<p>Phone: {user.contact.phone}</p>
				</div>
			)}
		</div>
	);
};

export default VolunteerDashboard;
