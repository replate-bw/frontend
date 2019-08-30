import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { TweenMax } from 'gsap';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import NavBarLogout from '../NavBar/NavBarLogout';
import Footer from '../Footer/Footer'

const VolunteerDashboard = props => {
  const id = props.match.params.id;

  const {
    user,
    setUser,
    acceptedPickups,
    setAcceptedPickups,
    pendingPickups,
    setPendingPickups
  } = useContext(UserContext);
  console.log(user, "user in volunteer dashboard");

  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/appointments")
      .then(res => {
        console.log("pending", res);
        setPendingPickups(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/appointments/mine")
      .then(res => {
        setAcceptedPickups(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const acceptAppointment = item => {
    axiosWithAuth()
      .post(`https://replatedb.herokuapp.com/appointments/accept/${item.id}`)
      .then(res => {
        console.log(res);
        setAcceptedPickups([...acceptedPickups, item]);

        axiosWithAuth()
          .get("https://replatedb.herokuapp.com/appointments")
          .then(res => {
            console.log("pending", res);
            setPendingPickups(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
		console.log(err);
      });
  };
  return !user ? (
    <div>Loading...</div>
  ) : (
	<>
	<NavBarLogout {...props}/>
    <div className="dashboard">
      <h1 className="dashboard-header">
        {user.contact.firstName} {user.contact.lastName}
      </h1>
      <div className="dashboard-section">
        <h3 className="dashboard-subheader">Pending Pickup Requests</h3>
        <div className="dashboard-locations">
          {pendingPickups.map(pickup => (
            <div className="dashboard-location">
              <div className="location-image" />
              <div className="location-text">
                <p className="location-info">{pickup.type}</p>
                <p
                  style={{ fontWeight: "600", letterSpacing: "1px" }}
                  className="location-info"
                >
                  {pickup.time} - {pickup.quantity}
                </p>
              </div>
              <button
                onClick={() => acceptAppointment(pickup)}
                className="dashboard-button accept-pickup__button"
              >
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard-section">
        <h3 className="dashboard-subheader">Accepted Pickups</h3>
        <div className="dashboard-locations">
          {acceptedPickups.map(
            pickup =>
              acceptedPickups.length && (
                <div className="dashboard-location">
                  <div className="location-image" />
                  <div className="location-text">
                    <p className="location-info">{pickup.type}</p>
                    <p
                      style={{ fontWeight: "600", letterSpacing: "1px" }}
                      className="location-info"
                    >
                      {pickup.time} - {pickup.quantity}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
	</>
  );
};

export default VolunteerDashboard;
