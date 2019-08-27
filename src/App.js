import React from 'react';
import './scss/index.scss'

import Navbar from './components/Navbar'
import BusinessDashboard from './components/Business/BusinessDashboard'
import NewPickupForm from './components/Business/NewPickupForm'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <BusinessDashboard />

      <Route path='/new-pickup' render={props => <NewPickupForm {...props} />} />
    </>
  );
}

export default App;
