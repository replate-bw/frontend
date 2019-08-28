import React, { useState, Component } from "react";
import { Sign, Context, SignupBtn, Header, Test } from "./Styles.js";
import axios from "axios";
import ReactDOM from 'react-dom';


// Kelly Code

//  ? operator example

// var num1 = 0;
// var num2 = 100;
// var result = (num1 === num2) ? 'yay' : 'nay'

export default class SignUp extends Component{
    

    constructor(props){
        super(props);
        this.state={
            user:{
                firstName: '', 
                lastName: '', 
                name: '', 
                email: '', 
                password: '', 
                address: '', 
                accountType: '', 
                phone: ''
            }
            
        }
    } 

    // const [user, setUser] = useState({firstName: '', lastName: '', name: '', email: '', password: '', address: '', accountType: '', phone: ''});

    // Event

    handleChange = (e) => {
        // const updatedUser = {...this.state.user, [event.target.name]: event.target.value};
        // console.log('handleChange', event.target.name, event.target.value, updatedUser);

        e.persist()
        let value = e.target.value
        // setUser(updatedUser);
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [e.target.name]: value
            }
        }) )
    }

    handleSubmit = (e) => {
        e.preventDefault();

    //    axios resquest

        axios.post('https://replatedb.herokuapp.com/auth/signup'
          ,this.state.user)
        
        //handle success
        .then(res => {

           console.log(res);
        })

        //handle error
        .catch(err => console.dir(err.response.message));
      
          e.preventDefault();
      
        // console.log('user state', user);
    }



render() {

    console.log(this.state.user)
    return (
    
        <Sign>
            <form onSubmit={this.handleSubmit}>
                <Context>

                    <Header>
                    <h2>Sign Up</h2>
                    </Header>

                    <div className= "form-group">
                        <label>Account Type:</label>
                            <select 
                                type= "accountType"
                                name= "accountType"
                                className= "form-group"
                                onChange= {this.handleChange}
                                value={this.state.user.accountType} required>
                                    <option value="">Select Category</option>
                                    <option value="business">Business</option>
                                    <option value="volunteer">Volunteer</option>
                                    

                            </select>
                    </div>

                   
                    { this.state.user.accountType === "business" ? (
                       <div className="form-group">
                         
                               
                        <label>Business Name: </label>
                            <input
                                type="name"
                                name= "name"
                                className="form-group"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.user.name}
                            />                           
                           
                    </div>
                    ): (
                        <div>
                        <div className="form-group">
                        <label>First Name: </label>
                            <input
                                type="firstName"
                                name= "firstName"
                                className="form-group"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.user.firstName}
                            /> 
                            </div>                   
   
                       <div className="form-group">
                           <label>Last Name: </label>
                               <input
                                   type="lastName"
                                   name= "lastName"
                                   className="form-group"
                                   placeholder=""
                                   onChange={this.handleChange}
                                   value={this.state.user.lastName}
                               />
                       </div>
                       </div>

                       )
                    

                           
                }

                   

       
                   
                     
                
                    
                    


                    <div className="form-group">
                        <label>Phone Number: </label>
                            <input
                                type="phone"
                                name= "phone"
                                className="form-group"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.user.phone}
                            />
                    </div>
               
                    <div className="form-group">
                        <label>Email: </label>
                            <input
                                type="email"
                                name= "email"
                                className="form-group"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.user.email}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                            <input
                                type="password"
                                name= "password"
                                className="form-group"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.user.password}
                            />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                            <input
                                type="address"
                                name= "address"
                                className="form-group"
                                placeholder=""
                                onChange={this.handleChange}
                                value={this.state.user.username}
                            />
                    </div>
                 

                  
                  
                            
                    

                    <SignupBtn className="button">Submit</SignupBtn>

                </Context>

            </form>

        </Sign>
     
    );
 }
    
    

}

