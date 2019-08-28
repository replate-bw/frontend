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
import NewPickupForm from './components/Business/NewPickupForm';
import VolunteerDashboard from './components/Volunteer/VolunteerDashboard';

//dummy components to be removed
import BusnDashboard from './components/JuliesDummyComponents/BusnDashboard';
import VolDashboard from './components/JuliesDummyComponents/VolDashboard';
import SignupVolunteer from './components/JuliesDummyComponents/SignupVolunteer';
import SignupBusiness from './components/JuliesDummyComponents/SignupBusiness';
import Signup from './components/JuliesDummyComponents/Signup';

function App () {
	const [ user, setUser ] = useState(() => (localStorage.user ? JSON.parse(localStorage.user) : null));

	const getUser = currentUser => {
		setUser(currentUser);
	};

	useEffect(
		() => {
			localStorage.setItem('user', JSON.stringify(user));
		},
		[ user ]
	);

	console.log(user, 'I am the current user');

	return (
		<UserContext.Provider value={{ user, setUser, getUser }}>
			<div className="app">
				<Navbar />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/signup/volunteer" component={SignupVolunteer} />
				<Route exact path="/signup/business" component={SignupBusiness} />

				{/* to be removed */}
				<PrivateRoute path="/protected/vol/:id" component={VolDashboard} />
				<PrivateRoute path="/protected/busn/:id" component={BusnDashboard} />

				{/* Colins Components */}
				<PrivateRoute path="/protected/volunteer" component={VolunteerDashboard} />
				<PrivateRoute path="/protected/business" component={BusinessDashboard} />
				<PrivateRoute path="/protected/business/new-pickup" component={NewPickupForm} />
			</div>
		</UserContext.Provider>
	);
}

export default App;
