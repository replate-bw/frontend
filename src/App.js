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
import Signup from './components/JuliesDummyComponents/Signup';

function App () {
	const [ user, setUser ] = useState(data);

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
				<PrivateRoute path="/protected/voll/:id" component={VollunteerDashboard} />
				<PrivateRoute path="/protected/busn/:id" component={BusnDashboard} />
			</div>
		</UserContext.Provider>
	);
}

export default App;
