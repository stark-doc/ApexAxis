import React from "react";
import "./Stats.css";

function Statistics() {
  return (
    <div
      className="statistics">
      <h1 className="emphasis">We are Good With Numbers!</h1>
      <div className="ui four column stackable grid">
        <div className="column">
          <h1 className="number first">500+</h1>
          <h3>College Students Signed Up</h3>
        </div>
        <div className="column">
          <h1 className="number second">850+</h1>
          <h3>Startups Across the Country</h3>
        </div>
        <div className="column">
          <h1 className="number third">300+</h1>
          <h3>Investors Worldwide</h3>
        </div>
        <div className="column">
          <h1 className="number fourth">100+</h1>
          <h3>Successful Projects and Investments</h3>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
