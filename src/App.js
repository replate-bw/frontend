import React from 'react';
import './scss/index.scss'

import Navbar from './components/Navbar'
import BusinessDashboard from './components/Business/BusinessDashboard'
import NewPickupForm from './components/Business/NewPickupForm'
import { Route } from 'react-router-dom'
import VolunteerDashboard from './components/Volunteer/VolunteerDashboard';

function App() {
  return (
    <>
      <Navbar />
      <BusinessDashboard />
      <VolunteerDashboard />

      <Route path='/new-pickup' render={props => <NewPickupForm {...props} />} />
    </>
  );
}

export default App;
