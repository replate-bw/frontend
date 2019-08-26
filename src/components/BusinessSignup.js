import React, { useState } from 'react';
import axios from 'axios';
import { Sign, Context, SignupBtn, Header } from "./Styles.js";
// import {Form, Field, withFormik} from 'formik';
// import * as Yup from "yup";



export default function SignUp(props) {
    console.log(props);
    const [user, setUser] = useState({businessname: '', phonenumber: '', address: '', email: '', password: '', usertype: ''});

    function handleChange(event) {
        const updatedUser = {...user, [event.target.name]: event.target.value};
        console.log('handleChange', event.target.name, event.target.value, updatedUser);

        setUser(updatedUser);
    }

    function handleSubmit(e) {
        e.preventDefault();
        //** */Add in axios post request when back-end's completed **//
        axios.post('', {headers: {
            'Content-Type': 'application/json'
          }})
        
        //handle success
        .then(res => {

           console.log(res);
        })

        //handle error
        .catch(err => console.dir(err));
      
          e.preventDefault();
      
        console.log('user state', user);
    }


    return (

        <div>
    
        <Sign>
            <form onSubmit={handleSubmit}>
                <Context>

                    <Header>
                    <h2>Sign Up</h2>
                    </Header>

                    <div className="form-group">
                        <label>Business Name: </label>
                            <input
                                type="businessname"
                                name= "businessname"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.firstname}
                            />
                    </div>
                   
                    <div className="form-group">
                        <label>Phone Number: </label>
                            <input
                                type="phonenumber"
                                name= "phonenumber"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.phonenumber}
                            />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                            <input
                                type="address"
                                name= "address"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.username}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                            <input
                                type="email"
                                name= "email"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.email}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                            <input
                                type="password"
                                name= "password"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.password}
                            />
                    </div>
                    

                    <div className="form-group">
                        <label>Contact Person: </label>
                            <input
                                type="firstname"
                                name= "firstname"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.contactperson}
                            />
                    </div>

                    <div className= "form-group">
                        <label>Business Type:</label>
                            <select 
                                type= "usertype"
                                name= "usertype"
                                className= "form-group"
                                onChange= {handleChange}
                                value={user.usertype} required>
                                    <option value="">Select Category</option>
                                    <option value="Restaraunt">Restaraunt</option>
                                    <option value="Grocery Store">Grocery Store</option>
                                    

                            </select>
                    </div>
                            
                    

                    <SignupBtn className="btn btn-primary">Submit</SignupBtn>

                </Context>

            </form>

        </Sign>

        </div>
     
    );
}










