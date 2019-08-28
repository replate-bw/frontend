import React, { useState, useEffect, useContext } from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Form } from 'semantic-ui-react'
import { TweenMax } from "gsap";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import UserContext from '../../contexts/UserContext';


const NewPickupForm = props => {

    const { errors, touched } = props;

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        TweenMax.to('.pickup-form', .3, {y: -12});
    })

    const buttonHover = e => {
        const btn = e.target;
        TweenMax.to(btn, 0.15, { y: -2 });
      };
    
      const buttonReturn = e => {
        const btn = e.target;
        TweenMax.to(btn, 0.15, { y: 0 });
      };

    return (
        <div className='new-pickup__modal'>
            <FormikForm className='pickup-form' use='semantic-ui-react'>
                <div className='form-content'>
                <h1 className='pickup-form__header'>Schedule an appointment for pickup</h1>
            <div className='pickup-form__fields'>
            {/* <>
            <Form.Field>
                <Field className='pickup-form__field' name='date' type='text' placeholder='Enter date' />
            </Form.Field>
            {touched.date && errors.date && <p className="error">{errors.date}</p>}
            </> */}

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='time' type='text' placeholder='Enter time' />
            </Form.Field>
            {touched.time && errors.time && <p className="error">{errors.time}</p>}
            </>

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='quantity' type='text' placeholder='Enter amount' />
            </Form.Field>
            {touched.quantity && errors.quantity && <p className="error">{errors.quantity}</p>}
            </>

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='type' type='text' placeholder='Enter type of food' />
            </Form.Field>
            {touched.type && errors.type && <p className="error">{errors.type}</p>}
            </>
            </div>

            <button onMouseEnter={buttonHover} onMouseLeave={buttonReturn} className='pickup-form__submit' type='submit'>Submit</button>
            </div>
            </FormikForm>

        </div>
    )
}

const FormikPickupForm = withFormik({
    mapPropsToValues({ time, quantity, type}) {
        return {
            time: time || '',
            quantity: quantity || '',
            type: type || '',
            status: 'Open',
        }
    },

        validationSchema : Yup.object().shape({
		// date: Yup.string().required('You cannot pass!!!'),
        time: Yup.string().required('Cannot pass'),
        quantity: Yup.string().required('You cannot pass!!!'),
        type: Yup.string().required('You cannot pass!!!'),
	}),

    handleSubmit(values) {
        axiosWithAuth()
        .post('https://replatedb.herokuapp.com/appointments', values)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
})(NewPickupForm)

export default FormikPickupForm
