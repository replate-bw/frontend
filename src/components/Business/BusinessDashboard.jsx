import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { TweenMax } from "gsap";
import { Link } from "react-router-dom";
import NavBarLogout from '../NavBar/NavBarLogout'
import Footer from '../Footer/Footer'

import UserContext from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const BusinessDashboard = props => {
  const id = props.match.params.id;

  const { user, setUser } = useContext(UserContext);

  const [locations, setLocations] = useState([]);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/locations/")
      .then(res => {
        setLocations(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/appointments/mine")
      .then(res => {
        setAppointments(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth()
    .get("https://replatedb.herokuapp.com/locations/")
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }, [])



  const buttonHover = e => {
    const btn = e.target;
    TweenMax.to(btn, 0.15, { y: -2 });
  };

  const buttonReturn = e => {
    const btn = e.target;
    TweenMax.to(btn, 0.15, { y: 0 });
  };

  return !user ? (
        <div>Loading...</div>
      ) : (
      
        <>
        <NavBarLogout {...props}/>
        <div className="dashboard-body">
        <div className="dashboard">
          <h1 className="dashboard-header">{user.name}</h1>
          <div className="dashboard-section">
            <h3 className="dashboard-subheader">Our Locations</h3>
            <div className="dashboard-locations">
              {locations.map(loc => (
                <div className="dashboard-location">
                  <div className="location-image" />
                  <div className="location-text">
                    <p className="location-info">
                      {loc.address}
                      <br />
                      {loc.city}, {loc.state} {loc.zip}
                    </p>
                  </div>
                </div>
              ))}

              <Link
			  	to={`/protected/business/new-location/${id}`}
                onMouseEnter={buttonHover}
                onMouseLeave={buttonReturn}
				className="dashboard-button add-location__button"
              >
                <FontAwesomeIcon icon={faPlusCircle} />
                New
                <br />
                Location
              </Link>
            </div>
          </div>
          <div className="dashboard-section">
            <h3 className="dashboard-subheader">Scheduled Pickups</h3>
            <Link
              to={`/protected/business/new-pickup/${id}`}
              onMouseEnter={buttonHover}
              onMouseLeave={buttonReturn}
              className="dashboard-button"
            >
              <FontAwesomeIcon icon={faPlus} />
              Make A Donation
            </Link>
			{appointments.map(app => (
				 <div className="dashboard-location">
				 <div className="location-text">
				   <p className="location-info">
					 {app.time}
					 <br />
					 {app.quantity}
					 <br />
					 {app.type}
				   </p>
				 </div>
			   </div>
			))}
          </div>
          <div className="dashboard-section">
            <h3 className="dashboard-subheader">Next Week's Schedule</h3>

            <div className="week-schedule">
              <div className="day-schedule">
                <div className="day-schedule__date">
                  Monday
                  <br />
                  August 26, 2019
                </div>
                {/* map over appointments here */}
              </div>
              <div className="day-schedule">
                <div className="day-schedule__date">
                  Tuesday
                  <br />
                  August 27, 2019
                </div>
              </div>
              <div className="day-schedule">
                <div className="day-schedule__date">
                  Wednesday
                  <br />
                  August 28, 2019
                </div>
              </div>
              <div className="day-schedule">
                <div className="day-schedule__date">
                  Thursday
                  <br />
                  August 29, 2019
                </div>
              </div>
              <div className="day-schedule">
                <div className="day-schedule__date">
                  Friday
                  <br />
                  August 30, 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

)}
  



export default BusinessDashboard;
