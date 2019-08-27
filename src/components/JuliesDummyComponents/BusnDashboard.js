import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

const BusnDashboard = props => {
	const { user, setUser } = useContext(UserContext);

	const id = props.match.params.id;

	return (
	<div>
		<h1>Business Dashboard</h1>
			{user.accountType}
	</div>
	)
};

export default BusnDashboard;
