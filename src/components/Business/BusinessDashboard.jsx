import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { TweenMax } from "gsap";
import { Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const BusinessDashboard = props => {
  const id = props.match.params.id;

  const { user, setUser } = useContext(UserContext);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://replatedb.herokuapp.com/locations/")
      .then(res => {
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
                      111 Miller Drive
                      <br />
                      San Jose CA, 95008
                    </p>
                  </div>
                </div>
              ))}

              <Link
			  	to='/protected/business/new-location'
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
              to="/protected/business/new-pickup"
              onMouseEnter={buttonHover}
              onMouseLeave={buttonReturn}
              className="dashboard-button"
            >
              <FontAwesomeIcon icon={faPlus} />
              Make A Donation
            </Link>
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
                <div className="day-schedule__pickup">
                  <div className="pickup-info">
                    <div className="pickup-time-amount">7:00 PM - 25 lbs</div>
                    <div className="pickup-type">
                      Chicken, beans, vegetables
                    </div>
                  </div>
                </div>
                <div className="day-schedule__pickup">
                  <div className="pickup-info">
                    <div className="pickup-time-amount">7:00 PM - 25 lbs</div>
                    <div className="pickup-type">
                      Chicken, beans, vegetables, cole slaw, blahbalh
                    </div>
                  </div>
                </div>
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
