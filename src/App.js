import React from 'react';
import './scss/index.scss'

import Navbar from './components/Navbar'
import BusinessDashboard from './components/Business/BusinessDashboard'

function App() {
  return (
    <>
      <Navbar />
      <BusinessDashboard />
    </>
  );
}

export default App;
