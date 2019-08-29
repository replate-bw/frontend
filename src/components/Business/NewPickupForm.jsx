import React, { useState, useEffect, useContext } from "react";
import { Form as FormikForm, Field, withFormik, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Form } from "semantic-ui-react";
import { TweenMax } from "gsap";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import UserContext from "../../contexts/UserContext";

const NewPickupForm = props => {
  const id = props.match.params.id;

  const { errors, touched } = props;

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    TweenMax.to(".pickup-form", 0.3, { y: -12 });
    console.log(id);
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/locations/")
      .then(res => {
        console.log(res.data);
        setLocations(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const buttonHover = e => {
    const btn = e.target;
    TweenMax.to(btn, 0.15, { y: -2 });
  };

  const buttonReturn = e => {
    const btn = e.target;
    TweenMax.to(btn, 0.15, { y: 0 });
  };

  return (
    locations.length && (
        <div className="new-pickup__modal">
            <Formik
        initialValues={{
          time: "",
          quantity: "",
          type: "",
          status: "Open",
          locationId: locations[0].id
        }}
        validationSchema={Yup.object().shape({
          time: Yup.string().required("Cannot pass"),
          quantity: Yup.string().required("You cannot pass!!!"),
          type: Yup.string().required("You cannot pass!!!")
        })}
        onSubmit={values => {
        console.log(values)
          axiosWithAuth()
            .post("https://replatedb.herokuapp.com/appointments/", {
              ...values,
              locationId: parseInt(values.locationId)
            })
            .then(res => {
              console.log(res);
              props.history.push(`/protected/business/${props.id}`);
            })
            .catch(err => console.log(err));
        }}
      >
          <FormikForm className="pickup-form" use="semantic-ui-react">
            <div className="form-content">
              <h1 className="pickup-form__header">
                Schedule an appointment for pickup
              </h1>
              <div className="pickup-form__fields">
                <>
                  <Form.Field>
                    <Field
                      className="pickup-form__field"
                      component="select"
                      name="locationId"
                    >
                      {locations.map(loc => (
                        <option value={loc.id}>
                          {loc.address}, {loc.city}, {loc.state} {loc.zip}
                        </option>
                      ))}
                    </Field>
                  </Form.Field>
                  {/* {touched.time && errors.time && (
                    <p className="error">{errors.time}</p>
                  )} */}
                </>
                <>
                  <Form.Field>
                    <Field
                      className="pickup-form__field"
                      name="time"
                      type="text"
                      placeholder="Enter time"
                    />
                  </Form.Field>
                  {/* {touched.time && errors.time && (
                    <p className="error">{errors.time}</p>
                  )} */}
                </>

                <>
                  <Form.Field>
                    <Field
                      className="pickup-form__field"
                      name="quantity"
                      type="text"
                      placeholder="Enter amount"
                    />
                  </Form.Field>
                  {/* {touched.quantity && errors.quantity && (
                    <p className="error">{errors.quantity}</p>
                  )} */}
                </>

                <>
                  <Form.Field>
                    <Field
                      className="pickup-form__field"
                      name="type"
                      type="text"
                      placeholder="Enter type of food"
                    />
                  </Form.Field>
                  {/* {touched.type && errors.type && (
                    <p className="error">{errors.type}</p>
                  )} */}
                </>
              </div>

              <button
                onMouseEnter={buttonHover}
                onMouseLeave={buttonReturn}
                className="pickup-form__submit"
                type="submit"
              >
                Submit
              </button>
              <button onClick={() => props.history.push(`/protected/business/${id}`)} className='pickup-form__submit'>Cancel</button>
            </div>
          </FormikForm>
          </Formik>
        </div>

    )
  );
};

export default NewPickupForm;
