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

//Colins components

import BusinessDashboard from './components/Business/BusinessDashboard';
import NewPickupForm from './components/Business/BusinessDashboard';
import VollunteerDashboard from './components/Volunteer/VolunteerDashboard';

//dummy components to be removed
import BusnDashboard from './components/JuliesDummyComponents/BusnDashboard';
import VollDashboard from './components/JuliesDummyComponents/VollDashboard';
import Signup from './components/JuliesDummyComponents/Signup';

function App () {
	const [ user, setUser ] = useState([]);

	const getUser = currentUser => {
		setUser(currentUser);
	};

	console.log(user, 'I am the current user');

	return (
		<UserContext.Provider value={{ user, setUser, getUser }}>
			<div className="app">
				<Navbar />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />

				{/* to be removed */}
				<PrivateRoute path="/protected/voll/:id" component={VollDashboard} />
				<PrivateRoute path="/protected/busn/:id" component={BusnDashboard} />

				{/* Colins Components */}
				<PrivateRoute path="/protected/vollunteer/" component={VollunteerDashboard} />
				<PrivateRoute path="/protected/business/" component={BusinessDashboard} />
				<PrivateRoute path="/protected/new-pickup/" render={props => <NewPickupForm {...props} />} />
			</div>
		</UserContext.Provider>
	);
}

export default App;
