import React, { useEffect, useContext } from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'semantic-ui-react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import UserContext from '../../contexts/UserContext';
import Footer from '../Footer/Footer'


const Login = (props) => {

    console.log(props)

    const { getUser } = useContext(UserContext);

    const { errors, touched, values, handleSubmit, status } = props;

    useEffect(() => {
        getUser(status)
    }, [status])
    
	return (
        <>
        <div className="login-panel">
        <div className="login-title">
        <h1>Login</h1>
        </div>
			<FormikForm use="semantic-ui-react">
                <div>
                <Form.Field>
				<Field className="login-input one" type="email" name="email" data-testid="email" placeholder="Email" />
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
				<button className="login-button" onClick={handleSubmit} type="submit">SUBMIT</button>
                </div>
			</FormikForm>
            
            
	
        </div>
        <Footer />
        </>
	);
};

const FormikLoginForm = withFormik({
	mapPropsToValues ({ email, password }) {
		return {
			email     : email || '',
			password : password || ''
		};
	},

	validationSchema : Yup.object().shape({
		email     : Yup.string().required('Please enter your email'),
		password : Yup.string().required('Please enter your password'),		
	}),

	handleSubmit (values, { props, setStatus, handleSubmit: e}) {
        // e.preventDefault()
        
        axiosWithAuth()
        
			.post('https://replatedb.herokuapp.com/auth/login', values)
			.then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                setStatus(res.data)
                const id = res.data.id
                if (res.data.accountType === 'business') {
                    
                props.history.push(`/protected/business/${id}`)
                }
                else {
                    console.log('I am a vollunteer')
                    props.history.push(`/protected/volunteer/${id}`)
                }
			})
			.catch((err) => console.log(err.response));
    },
})(Login);

export default FormikLoginForm;





