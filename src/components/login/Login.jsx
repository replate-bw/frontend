import React, { useState, useEffect, useContext } from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import UserContext from '../../contexts/UserContext'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Form } from 'semantic-ui-react'
// import '../../scss/login.scss'

const Login = (props) => {

    const { users } = useContext(UserContext)

    const { errors, touched, values, handleSubmit, status, setUsers } = props;
    
    // useEffect(
    //     () => {
    //         const getUsers = () => {
    //             axiosWithAuth()
    //             .get('../data/data.js')
    //             .then(res => {
    //                 setUsers(res.data)
    //             })
    //             .then(status &&
    //                 setUsers([
    //                     ...users,
    //                     status
    //                 ]))
    //             .catch(e => {
    //                 console.log('Server error', e)
    //             })
    //         };
    //         getUsers();
    //     }, [status]
    // );

	// console.log('this is the status', status);

	return (
        <>
        <div className="login-panel">
		<div className="user-form">
        
			<FormikForm use="semantic-ui-react">
                <div>
                <Form.Field>
				<Field className="login-input" type="text" name="username" data-testid="username" placeholder="Name" />
                {touched.username && errors.username && <p className="error">{errors.username}</p>}
                </Form.Field>
                </div>
                <div>
                <Form.Field>
				<Field className="login-input" type="text" name="password" data-testid="password" placeholder="Password" />
				{touched.email && errors.email && <p className="error">{errors.email}</p>}
                </Form.Field>
                </div>

                <div>
				<button className="login-button" onClick={handleSubmit} type="submit">Submit!</button>
                </div>
			</FormikForm>
            
            
		</div>
        </div>
        </>
	);
};

const FormikLoginForm = withFormik({
	mapPropsToValues ({ username, password }) {
		return {
			username     : username || '',
			password : password || ''
		};
	},

	validationSchema : Yup.object().shape({
		username     : Yup.string().required('You cannot pass!!!'),
		password : Yup.string().min(6, 'Password has to be longer than 6 characters').required('Cannot pass'),		
	}),

	handleSubmit (values, { setStatus }) {
		axios
			.post('', values)
			.then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.payload);
                const id = res.data.id
                if (res.data.accountType === 'business') {
                    
                this.props.history.push(`/protected/busn/${id}`)
                }
                else {
                    this.props.history.push(`/protected/voll/${id}`)
                }
			})
			.catch((err) => console.log(err.response));
    },
})(Login);

export default FormikLoginForm;





