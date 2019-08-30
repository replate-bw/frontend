import React, { useState, useEffect } from 'react';
import './scss/index.scss';
import UserContext from './contexts/UserContext';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Login from './components/login/Login';
import NavBarLogout from '../src/components/NavBar/NavBarLogout';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';

//Colins components

import BusinessDashboard from './components/Business/BusinessDashboard';
import NewPickupForm from './components/Business/NewPickupForm';
import EditPickupForm from './components/Business/EditPickupForm';
import NewLocationForm from './components/Business/NewLocationForm';
import VolunteerDashboard from './components/Volunteer/VolunteerDashboard';

//Kellys components

import Signup from './components/Signup/Signup';

//dummy components to be removed
import BusnDashboard from './components/JuliesDummyComponents/BusnDashboard';
import VolDashboard from './components/JuliesDummyComponents/VolDashboard';
import SignupVolunteer from './components/JuliesDummyComponents/SignupVolunteer';
import SignupBusiness from './components/JuliesDummyComponents/SignupBusiness';
// import Signup from './components/JuliesDummyComponents/Signup';

function App () {
	const [ user, setUser ] = useState(() => (localStorage.user ? JSON.parse(localStorage.user) : null));

	const [appToEdit, setAppToEdit] = useState({});
	
	const [locations, setLocations] = useState([]);

	const [acceptedPickups, setAcceptedPickups] = useState([]);

	const [pendingPickups, setPendingPickups] = useState([]);

	const getUser = currentUser => {
		setUser(currentUser);
	};

	useEffect(
		() => {
			user && localStorage.setItem('user', JSON.stringify(user));
		},
		[ user ]
	);

	console.log(user, 'I am the current user');

	return (
		<UserContext.Provider value={{ user, setUser, getUser, appToEdit, setAppToEdit, locations, setLocations, acceptedPickups, setAcceptedPickups, pendingPickups, setPendingPickups }}>
			<div className="app">
				{/* <Navbar /> */}
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/signup/volunteer" component={SignupVolunteer} />
				<Route exact path="/signup/business" component={SignupBusiness} />

				{/* to be removed */}
				<PrivateRoute path="/protected/vol" component={VolDashboard} />
				<PrivateRoute path="/protected/busn" component={BusnDashboard} />

				{/* Colins Components */}
				<PrivateRoute path="/protected/volunteer/:id" component={VolunteerDashboard} />
				<PrivateRoute path="/protected/business/:id" component={BusinessDashboard} />
				<PrivateRoute path="/protected/business/new-pickup/:id" component={NewPickupForm} />
				<PrivateRoute path="/protected/business/edit-pickup/:id" component={EditPickupForm} />
				<PrivateRoute path="/protected/business/new-location/:id" component={NewLocationForm} />
			</div>
		</UserContext.Provider>
	);
}

export default App;
