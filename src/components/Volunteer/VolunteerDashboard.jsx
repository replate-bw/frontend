import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { TweenMax } from 'gsap';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const VolunteerDashboard = props => {
	const id = props.match.params.id;

	const [pendingPickups, setPendingPickups] = useState([]);

	const [accepted, setAccepted] = useState([]);
	
	const { user, setUser } = useContext(UserContext);
	console.log(user, 'user in volunteer dashboard');

	useEffect(() => {
		axiosWithAuth()
		.get('https://replatedb.herokuapp.com/appointments')
		.then(res => {
			console.log('pending', res);
			setPendingPickups(res.data);
		})
		.catch(err => console.log(err))
	}, [])

	useEffect(() => {
		axiosWithAuth()
		.get('https://replatedb.herokuapp.com/appointments/mine')
		.then(res => {
			console.log('mine', res)
		})
		.catch(err => console.log(err))
	}, [])

	console.log('vol dashboard', user);

	const buttonHover = e => {
		const btn = e.target;
		TweenMax.to(btn, 0.15, { y: -2 });
	};

	const buttonReturn = e => {
		const btn = e.target;
		TweenMax.to(btn, 0.15, { y: 0 });
	};

	return !user ? (
		<div>Loading...</div>
	) : (
		<div className="dashboard">
			<h1 className="dashboard-header">{user.contact.firstName} {user.contact.lastName}</h1>
			<div className="dashboard-section">
				<h3 className="dashboard-subheader">Pending Pickup Requests</h3>
				<div className="dashboard-locations">
					{pendingPickups.map(pickup => 
						<div className="dashboard-location">
						<div className="location-image" />
						<div className="location-text">
							<p className="location-info">
								{pickup.type}
							</p>
							<p style={{ fontWeight: '600', letterSpacing: '1px' }} className="location-info">
								{pickup.time} - {pickup.quantity}
							</p>
						</div>
						<button className='dashboard-button accept-pickup__button'><FontAwesomeIcon icon={faPlusCircle} /></button>
					</div>
					)}
					
			</div>
			</div>
			<div className="dashboard-section">
				<h3 className="dashboard-subheader">Accepted Pickups</h3>
			</div>
		</div>
	);
};

export default VolunteerDashboard;


