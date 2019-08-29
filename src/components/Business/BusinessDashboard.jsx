import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { TweenMax } from "gsap";
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const BusinessDashboard = props => {
  const id = props.match.params.id;

  const { user, setUser, setAppToEdit, locations, setLocations } = useContext(UserContext);

  const [appointments, setAppointments] = useState([]);

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
      console.log(res)
    })
    .catch(err => console.log(err));
  }, [])

  const deleteLocation = item => {
    axiosWithAuth()
    .delete(`https://replatedb.herokuapp.com/locations/${item.id}`)
    .then(res => {
      console.log(res)
      setLocations(locations.filter(loc => loc.id !== item.id))
    })
    .catch(err => console.log(err));
  }
  const deleteAppointment = item => {
    axiosWithAuth()
    .delete(`https://replatedb.herokuapp.com/appointments/${item.id}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
  }



  const buttonHover = e => {
    const btn = e.target;
    TweenMax.to(btn, 0.15, { y: -2 });
  };

  const buttonReturn = e => {
    const btn = e.target;
    TweenMax.to(btn, 0.15, { y: 0 });
  };

  return (
    <div className="dashboard">
      {!user ? (
        <div>Loading...</div>
      ) : (
        <>
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
                    <button onClick={() => deleteLocation(loc)} className='dashboard-function'>X</button>
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
         <button onClick={() => deleteAppointment(app)} className='dashboard-delete'>X</button>
         <Link className='dashboard-function' onClick={() => setAppToEdit(app)} to={`/protected/business/edit-pickup/${id}`}>Edit</Link>
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
        </>
      )}
    </div>
  );
};

export default BusinessDashboard;
