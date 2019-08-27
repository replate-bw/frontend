import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const BusinessDashboard = () => {
    return (
        <div className='dashboard'>
            <h1 className='dashboard-header'>Tony & Alba's</h1>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Our Locations</h3>
            <div className="dashboard-locations">

                <div className="dashboard-location">
                    <div className='location-image'></div>
                    <div className="location-text">
                    <p className='location-address'>111 Miller Drive<br />San Jose CA, 95008</p>
                    </div>
                </div>
                <button className='dashboard-button add-location__button'>
                <FontAwesomeIcon icon={faPlusCircle} />
                New<br />Location
                </button>
            </div>

            </div>
            <div className='dashboard-section'>
            <h3 className='dashboard-subheader'>Scheduled Pickups</h3>
            <button className='dashboard-button'>
                <FontAwesomeIcon icon={faPlus} />
                Make A Donation
                </button>
            </div>
        </div>
    )
}

export default BusinessDashboard
