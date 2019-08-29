import React, { useState, useEffect, useContext } from 'react';
import { Sign, Context, SignupBtn, Header, Test } from './Styles.js';
import axios from 'axios';
import ReactDOM from 'react-dom';
import UserContext from '../../contexts/UserContext';
// import Signup from '../JuliesDummyComponents/Signup.jsx';

// Kelly Code

//  ? operator example

// var num1 = 0;
// var num2 = 100;
// var result = (num1 === num2) ? 'yay' : 'nay'

const Signup = props => {
	const { getUser } = useContext(UserContext);

	const [ newUser, setNewUser ] = useState({
		firstName: '',
		lastName: '',
		name: '',
		email: '',
		password: '',
		address: '',
		accountType: '',
		phone: ''
	});

	const handleChange = e => {
		setNewUser({ ...newUser, [e.target.name]: e.target.value });
		console.log('handleChange', e.target.name, e.target.value, newUser);
	};

	const handleSubmit = e => {
		e.preventDefault();
		axios
			.post('https://replatedb.herokuapp.com/auth/signup', newUser)
			.then(res => {
				console.log(res);
				localStorage.setItem('token', res.data.token);
				const id = res.data.id;
				if (res.data.accountType === 'business') {
					props.history.push(`/protected/business/${id}`);
				}
				else {
					props.history.push(`/protected/volunteer/${id}`);
				}
			})
			.catch(err => console.log('error in signup', err));
	};

	useEffect(
		() => {
			getUser(newUser);
		},
		[ newUser ]
	);

	return (
		<Sign>
			<form onSubmit={handleSubmit}>
				<Context>
					<div className="signup-header">
						<h2>Sign Up</h2>
					</div>

					<div className="form-group">
						{/* <label>Account Type:</label> */}
						<select
							type="accountType"
							name="accountType"
							className="form-group"
							placeholder="Select Account Type"
							onChange={handleChange}
							value={newUser.accountType}
							required>
							<option value="">Select Account Type</option>
							<option value="business">Business</option>
							<option value="volunteer">Volunteer</option>
						</select>
					</div>

					{newUser.accountType === 'business' ? (
						<div>
							<div className="form-group">
								{/* <label>Business Name: </label> */}
								<input
									type="name"
									name="name"
									className="form-group"
									placeholder="Business Name"
									onChange={handleChange}
									value={newUser.name}
								/>
							</div>

							<div className="form-group">
								{/* <label>First Name: </label> */}
								<input
									type="firstName"
									name="firstName"
									className="form-group"
									placeholder="First Name"
									onChange={handleChange}
									value={newUser.firstName}
								/>
							</div>

							<div className="form-group">
								{/* <label>Last Name: </label> */}
								<input
									style={{ width: '320px' }}
									type="lastName"
									name="lastName"
									className="form-group"
									placeholder="Last Name"
									onChange={handleChange}
									value={newUser.lastName}
								/>
							</div>
						</div>
					) : (
						<div>
							<div className="form-group">
								{/* <label>First Name: </label> */}
								<input
									style={{ width: '320px' }}
									type="firstName"
									name="firstName"
									className="form-group"
									placeholder="First Name"
									onChange={handleChange}
									value={newUser.firstName}
								/>
							</div>

							<div className="form-group">
								{/* <label>Last Name: </label> */}
								<input
									type="lastName"
									name="lastName"
									className="form-group"
									placeholder="Last Name"
									onChange={handleChange}
									value={newUser.lastName}
								/>
							</div>
						</div>
					)}

					<div className="form-group">
						{/* <label>Phone Number: </label> */}
						<input
							type="phone"
							name="phone"
							className="form-group"
							placeholder="Phone Number"
							onChange={handleChange}
							value={newUser.phone}
						/>
					</div>

					<div className="form-group">
						{/* <label>Email: </label> */}
						<input
							type="email"
							name="email"
							className="form-group"
							placeholder="email"
							onChange={handleChange}
							value={newUser.email}
						/>
					</div>
					<div className="form-group">
						{/* <label>Password: </label> */}
						<input
							type="password"
							name="password"
							className="form-group"
							placeholder="Password"
							onChange={handleChange}
							value={newUser.password}
						/>
					</div>
					<div className="form-group">
						{/* <label>Address: </label> */}
						<input
							type="address"
							name="address"
							className="form-group"
							placeholder="address"
							onChange={handleChange}
							value={newUser.username}
						/>
					</div>

					<SignupBtn className="button">SUBMIT</SignupBtn>
				</Context>
			</form>
		</Sign>
	);
};

export default Signup;
