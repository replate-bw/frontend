import React from 'react';
import './scss/index.scss';

import Signup from '../src/components/Signup.js'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      {/* <BusinessSignUp /> */}
      <Signup />
      
    </>
  );
}

export default App;
