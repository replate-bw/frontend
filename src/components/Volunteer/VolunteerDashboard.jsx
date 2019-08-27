import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { TweenMax } from "gsap";
import { Link } from 'react-router-dom'


const VolunteerDashboard = () => {

    const buttonHover = e => {
        const btn = e.target;
        TweenMax.to(btn, 0.15, { y: -2 });
      };
    
      const buttonReturn = e => {
        const btn = e.target;
        TweenMax.to(btn, 0.15, { y: 0 });
      };

    return (
        <div className='dashboard'>
            <h1 className='dashboard-header'>Colin de Vries</h1>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Pending Pickup Requests</h3>
            <div className="dashboard-locations">
                    {/* map over appointments here */}
                <div className="dashboard-location">
                    <div className='location-image'></div>
                    <div className="location-text">
                    <p className='location-info'>111 Miller Drive<br />San Jose CA, 95008</p>
                    <p style={{fontWeight: '600', letterSpacing: '1px'}} className='location-info'>7:00PM - 25 lbs</p>
                    </div>
                    <button className='dashboard-button accept-pickup__button'><FontAwesomeIcon icon={faPlusCircle} /></button>
                </div>
            </div>

            </div>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Accepted Pickups</h3>

            </div>
        </div>
    )
}

export default VolunteerDashboard
