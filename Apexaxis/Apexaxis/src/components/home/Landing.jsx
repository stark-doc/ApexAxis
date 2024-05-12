// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Landing.css";

// eslint-disable-next-line react/prop-types
function Landing({ handleClick }) {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>
          Fueling innovation <span className="line-break"></span> & Fostering
          sustainability
        </h1>
        <p>
        Empower change through conscious investment, forging a sustainable future one project at a time
        </p>
        <button type="button" className="sign-up" onClick={handleClick}>
          <b>
            {" "}
            <i className="signup icon"></i>Join Now!
          </b>
        </button>
      </div>
    </div>
  );
}

export default Landing;
