import React, { useState, useEffect } from 'react';
import './scss/index.scss';
import Navbar from './components/Navbar';
import data from './data/data';
import axios from 'axios';
import UserContext from './contexts/UserContext';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Login from './components/login/Login';

//dummy components to be removed
import BusnDashboard from './components/JuliesDummyComponents/BusnDashboard';
import VollunteerDashboard from './components/JuliesDummyComponents/VollunteerDashboard';

function App () {
	const [ users, setUsers ] = useState(data);

	// useEffect(
	//     () => {
	//         const getUsers = () => {
	//             axiosWithAuth()
	// .get()
	//             .then(res => {
	//               console.log(res)
	//                 setUsers(res.data)
	//             })
	//             .catch(e => {
	//                 console.log('Server error', e)
	//             })
	//         };
	//         getUsers();
	//     }, [users]
	// );

	console.log(users);

	return (
		<UserContext.Provider value={{ users }}>
			<div className="app">
				<Navbar />
				<Route exact path="/login" component={Login} />

				<PrivateRoute
					path="/protected/busn/:id"
					render={props => {
						const user = users.find(user => user.id == props.match.params.id);
						if (!user) {
							return <div>Loading...</div>;
						}
						return <BusnDashboard {...props} user={user} />;
					}}
				/>

				<PrivateRoute
					path="/protected/voll/:id"
					render={props => {
						const user = users.find(user => user.id == props.match.params.id);
						if (!user) {
							return <div>Loading...</div>;
						}
						return <VollunteerDashboard {...props} user={user} />;
					}}
				/>
			</div>
		</UserContext.Provider>
	);
}

export default App;

{
	/* <PrivateRoute exact path="/protected/busn" component={BusnDashboard} /> */
}

{
	/* <PrivateRoute exact path="/protected/voll/:id" component={VollunteerDashboard} /> */
}
