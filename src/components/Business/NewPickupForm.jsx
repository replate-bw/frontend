import React, { useState, useEffect, useContext } from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Form } from 'semantic-ui-react'
import { TweenMax } from "gsap";

const NewPickupForm = props => {

    const { errors, touched, values } = props;

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
            <>
            <Form.Field>
                <Field className='pickup-form__field' name='date' type='text' placeholder='Enter date' />
            </Form.Field>
            {touched.date && errors.date && <p className="error">{errors.date}</p>}
            </>

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='time' type='text' placeholder='Enter time' />
            </Form.Field>
            {touched.time && errors.time && <p className="error">{errors.time}</p>}
            </>

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='amount' type='text' placeholder='Enter amount' />
            </Form.Field>
            {touched.amount && errors.amount && <p className="error">{errors.amount}</p>}
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
    mapPropsToValues({ date, time, amount, type }) {
        return {
            date: date || '',
            time: time || '',
            amount: amount || '',
            type: type || ''
        }
    },

        validationSchema : Yup.object().shape({
		date: Yup.string().required('You cannot pass!!!'),
        time: Yup.string().required('Cannot pass'),
        amount: Yup.string().required('You cannot pass!!!'),
        type: Yup.string().required('You cannot pass!!!'),
	}),

    handleSubmit(values) {
        console.log(values);
    }
})(NewPickupForm)

export default FormikPickupForm
