import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const VollunteerDashboard = props => {
	const id = props.match.params.id;

	const { user, setUser } = useContext(UserContext);
	console.log(user, 'this is the vollunteer user');

	return (
		<div>
			<h1>Vollunteer Dashboard</h1>
			{!user ? (
				<div>Loading...</div>
			) : (
				<div>
					<p>{user.accountType}</p>
					<p>{user.contact.firstName}</p>
					<p>{user.contact.lastName}</p>

					<p>{user.email}</p>
					<p>{user.address}</p>
					<p>{user.contact.phone}</p>
				</div>
			)}
		</div>
	);
};

export default VollunteerDashboard;

// {!user ? (
// 	<div>Loading...</div>
// ) : (
// 	user.map(i => {
// 		return <p>{i.name}</p>;
// 	})
// )}
