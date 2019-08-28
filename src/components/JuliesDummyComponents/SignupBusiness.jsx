import React, { useState, useEffect, useContext } from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Form } from 'semantic-ui-react';
import UserContext from '../../contexts/UserContext'

const SignupBusiness = (props) => {

    const { getUser } = useContext(UserContext);

    const { errors, touched, values, handleSubmit, status } = props;

    useEffect(() => {
        getUser(status)
    }, [status])

	return (
        <>
        <div className="signup-panel">
		
			<FormikForm use="semantic-ui-react">
                <div>
                <Form.Field>
				<Field className="login-input" type="email" name="email" data-testid="email" placeholder="Email" />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                </Form.Field>
                </div>
                <div>
                <Form.Field>
				<Field className="login-input" type="password" name="password" data-testid="password" placeholder="Password" />
				{touched.password && errors.password && <p className="error">{errors.password}</p>}
                </Form.Field>
                </div>
                <div>
                <Form.Field>
				<Field className="login-input" type="text" name="firstName" data-testid="password" placeholder="First Name" />
				{touched.firstName && errors.firstName && <p className="error">{errors.firstName}</p>}
                </Form.Field>
                </div>
                <div>
                <Form.Field>
				<Field className="login-input" type="text" name="lastName" data-testid="lastName" placeholder="Last Name" />
				{touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}
                </Form.Field>
                </div>
                  <div>
                <Form.Field>
				<Field className="login-input" type="text" name="name" data-testid="name" placeholder="Business Name" />
				{touched.name && errors.name && <p className="error">{errors.name}</p>}
                </Form.Field>
                </div>
                <div>
                <Form.Field>
				<Field className="login-input" component="select" name="accountType" data-testid="accountType">
                    <option value="select">Select</option>
                    <option value="business">Business</option>
                    <option value="volunteer">Vollunteer</option>
                </Field>
				{touched.accountType && errors.accountType && <p className="error">{errors.accountType}</p>}
                </Form.Field>
                </div>
                <div>
                <Form.Field>
				<Field className="login-input" type="address" name="address" data-testid="address" placeholder="Address" />
				{touched.address && errors.address && <p className="error">{errors.address}</p>}
                </Form.Field>
                </div>
                <div>
                <Form.Field>
				<Field className="login-input" type="phone" name="phone" data-testid="phone" placeholder="Phone" />
				{touched.phone && errors.phone && <p className="error">{errors.phone}</p>}
                </Form.Field>
                </div>

                <div>
				<button className="login-button" onClick={handleSubmit} type="submit">SIGN UP</button>
                </div>
			</FormikForm>
            
        </div>
        </>
	);
};

const FormikLoginForm = withFormik({
	mapPropsToValues ({ email, password, name, firstName, lastName, address, phone, accountType }) {
		return {
			email     : email || '',
            password : password || '',
            name: name || '',
            firstName: firstName || '',
            lastName: lastName || '',
            accountType: accountType || '',
            address: address || '',
            phone: phone || '',
		};
	},

	validationSchema : Yup.object().shape({
		email     : Yup.string().required('You cannot pass!!!'),
        password : Yup.string().min(6, 'Password has to be longer than 6 characters').required('Cannot pass'),
        name: Yup.string().required('You cannot pass!!!'),
        accountType: Yup.string().required('You cannot pass!!!'),
        address: Yup.string().required('You cannot pass!!!'),
        phone: Yup.string().required('You cannot pass!!!'),
        		
	}),

	handleSubmit (values, { props, setStatus }) {
		axios
			.post('http://replatedb.herokuapp.com/auth/signup', values)
			.then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                setStatus(res.data);
                const id = res.data.id
                if (res.data.accountType === 'business') {
                    
                props.history.push(`/protected/business/${id}`)
                }
                else {
                props.history.push(`/protected/vollunteer/${id}`)
                }
			})
			.catch((err) => console.log(err.response));
    },
})(SignupBusiness);

export default FormikLoginForm;





