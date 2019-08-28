import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const BusnDashboard = props => {
	const id = props.match.params.id;

	const { user, setUser } = useContext(UserContext);

	localStorage.setItem('user', JSON.stringify(user));
	console.log(user, 'this is the business user');

	return (
		<div>
			<h1>Business Dashboard</h1>
			{!user ? (
				<div>Loading...</div>
			) : (
				<div className="dummy-vollDasboard">
					<p>Account Type: {user.accountType}</p>
					<p>Business Name: {user.name}</p>
					<p>First Name: {user.firstName}</p>
					<p>Last Name: {user.lastName}</p>
					<p>Email: {user.email}</p>
					<p>Address: {user.address}</p>
					<p>Phone: {user.phone}</p>
				</div>
			)}
		</div>
	);
};

export default BusnDashboard;
