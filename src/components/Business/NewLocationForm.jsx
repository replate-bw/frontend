import React, { useState, useEffect, useContext } from 'react';
import { Form as FormikForm, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Form } from 'semantic-ui-react'
import { TweenMax } from "gsap";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import UserContext from '../../contexts/UserContext';


const NewLocationForm = props => {
    const id = props.match.params.id;

    const { errors, touched } = props;

    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        TweenMax.to('.pickup-form', .3, {y: -12});
    },[])

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
            {console.log('form id', id)}
            <FormikForm className='pickup-form' use='semantic-ui-react'>
                <div className='form-content'>
                <h1 className='pickup-form__header'>Add a new location</h1>
            <div className='pickup-form__fields'>
            {/* <>
            <Form.Field>
                <Field className='pickup-form__field' name='date' type='text' placeholder='Enter date' />
            </Form.Field>
            {touched.date && errors.date && <p className="error">{errors.date}</p>}
            </> */}

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='address' type='text' placeholder='Enter address' />
            </Form.Field>
            {touched.address && errors.address && <p className="error">{errors.address}</p>}
            </>

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='city' type='text' placeholder='Enter city' />
            </Form.Field>
            {touched.city && errors.city && <p className="error">{errors.city}</p>}
            </>

            <>
            <Form.Field>
                <Field className='pickup-form__field' name='state' type='text' placeholder='Enter state' />
            </Form.Field>
            {touched.state && errors.state && <p className="error">{errors.state}</p>}
            </>
            <>
            <Form.Field>
                <Field className='pickup-form__field' name='zip' type='text' placeholder='Enter zip code' />
            </Form.Field>
            {touched.zip && errors.zip && <p className="error">{errors.zip}</p>}
            </>
            </div>

            <button onMouseEnter={buttonHover} onMouseLeave={buttonReturn} className='pickup-form__submit' type='submit'>Submit</button>
            </div>
            </FormikForm>

        </div>
    )
}

const FormikLocationForm = withFormik({
    mapPropsToValues({ address, city, state, zip, id }) {
        return {
            address: address || '',
            city: city || '',
            state: state || '',
            zip: zip || '',
            business_id: id || ''

        }
    },

        validationSchema : Yup.object().shape({
        address: Yup.string().required('Cannot pass'),
        city: Yup.string().required('You cannot pass!!!'),
        state: Yup.string().required('You cannot pass!!!'),
        zip: Yup.string().required('You cannot pass!!!'),
	}),

    handleSubmit(values, { props }) {
        axiosWithAuth()
        .post('https://replatedb.herokuapp.com/locations/', values)
        .then(res => {
            console.log(res.data);
            props.history.push(`/protected/business/${props.id}`)
        })
        .catch(err => console.log(err))
    }
})(NewLocationForm)

export default FormikLocationForm
