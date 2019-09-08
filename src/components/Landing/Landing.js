import React from "react";
import { Link } from "react-router-dom";

const Landing = props => {
  return (
    <div className="landing-page">
      <div className="landing">
        <h1>replate</h1>
        <h1>Less waste. Less hunger.</h1>
        <h4>
          Help save waste and feed the hungry. See how you can get involved.
        </h4>
        <Link to="/signup" className="cta">
          GET STARTED
        </Link>
        <p>
          Already have an account?{" "}
          <Link className="login-link" to="/login">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Landing;
