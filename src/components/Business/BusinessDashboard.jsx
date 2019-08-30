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

  const { user, setUser, setAppToEdit, locations, setLocations, appointments, setAppointments } = useContext(
    UserContext
  );

  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/locations/")
      .then(res => {
        setLocations(res.data);
        console.log(props);
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
  }, [appointments]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/locations/")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteLocation = item => {
    axiosWithAuth()
      .delete(`https://replatedb.herokuapp.com/locations/${item.id}`)
      .then(res => {
        console.log(res);
        setLocations(locations.filter(loc => loc.id !== item.id));
      })
      .catch(err => console.log(err));
  };
  const deleteAppointment = item => {
    axiosWithAuth()
      .delete(`https://replatedb.herokuapp.com/appointments/${item.id}`)
      .then(res => {
        setAppointments(appointments.filter(app => app.id !== item.id));
      })
      .catch(err => console.log(err));
  };

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
        <div className="dashboard-container">
        <div className='dashboard-body'>
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
                    <button
                      onClick={() => deleteLocation(loc)}
                      className="dashboard-button dashboard-function"
                    >
                      X
                    </button>
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
            <div className="dashboard-locations">
              {appointments.map(app => (
                <div className="dashboard-location">
                  <div className="location-text">
                    <p className="location-info">Time: {app.time}</p>
                    <p className="location-info">Quantity: {app.quantity}</p>

                    <p className="location-info">Type: {app.type}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1.5rem 0"
                    }}
                  >
                    <button
                      style={{
                        fontSize: "1.8rem",
                        padding: "1rem 2rem",
                        marginLeft: "1.5rem"
                      }}
                      onClick={() => deleteAppointment(app)}
                      className="dashboard-delete dashboard-button"
                    >
                      X
                    </button>
                    <Link
                      style={{
                        fontSize: "2rem",
                        textTransform: "uppercase",
                        marginLeft: "2rem"
                      }}
                      className="dashboard-function"
                      onClick={() => setAppToEdit(app)}
                      to={`/protected/business/edit-pickup/${id}`}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
      </div>
      </>


)}
  



export default BusinessDashboard;
