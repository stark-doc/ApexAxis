import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

const Mentordetails = ({ handleClick, mentor, handleLoginClick }) => {
  const [roi, setROI] = useState(null);

  function calculateROI() {
    // Perform ROI calculation based on the input values
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const annualRevenue = parseFloat(document.getElementById('annualRevenue').value);
    const annualCostSavings = parseFloat(document.getElementById('annualCostSavings').value);

    // Calculate net profit
    const netProfit = annualRevenue + annualCostSavings - initialInvestment;

    // Calculate ROI
    const calculatedROI = (netProfit / initialInvestment) * 100;
    setROI(calculatedROI.toFixed(2)); // Update the state with the calculated ROI
  }

  // Function to create and render the impact assessment chart
  function renderImpactAssessmentChart() {
    // Define project impact data (example values)
    const timePeriods = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];
    const evChargingStations = [10, 15, 20, 25, 30];  // Number of EV charging stations deployed over time
    const evAdoptionRates = [5, 10, 15, 20, 25];      // Percentage increase in electric vehicle adoption over time
    const carbonEmissionsReduction = [1000, 1500, 2000, 2500, 3000];  // Reduction in carbon emissions (in tons) over time
    const airQualityImprovement = [5, 8, 12, 15, 20];  // Improvement in air quality (percentage decrease) over time

    // Create chart
    const ctx = document.getElementById('impactChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timePeriods,
        datasets: [{
          label: 'EV Charging Stations Deployed',
          data: evChargingStations,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false
        }, {
          label: 'Electric Vehicle Adoption Rate',
          data: evAdoptionRates,
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          fill: false
        }, {
          label: 'Carbon Emissions Reduction',
          data: carbonEmissionsReduction,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }, {
          label: 'Air Quality Improvement',
          data: airQualityImprovement,
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: false,
        scales: {
          x: {
            scaleLabel: {
              display: true,
              labelString: 'Time'
            }
          },
          y: {
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }
        }
      }
    });
  }

  // Execute renderImpactAssessmentChart when the component mounts
  useEffect(() => {
    renderImpactAssessmentChart();
  }, []);

  // Handle conversation button click event
  function handleConversation() {
    // Your conversation handling logic here
  }

  // Handle booking button click event
  function handleBooking() {
    // Your booking handling logic here
  }

  return (
    <div className="ui fluid segment">
      {/* Mentor details */}
      <div className="ui three column centered stackable padded grid">
        <div className="row custom-bg">
          <div className="column mentor-content">
            <div className="flex-container">
              <h2 className="large header">{mentor.name}</h2>
            </div>
            
            
          </div>
        </div>
      </div>

      

      {/* Project Details */}
      <div className="ui segment">
        <h1 className="custom-header">{mentor.name}'s Project Details</h1>
        <h2>{mentor.name}</h2>
        <div className="project-description">
          {/* Add project description here */}
          {/* Example: GreenTech Solutions for Urban Mobility */}
          {mentor.description}
        </div>
        <h2>Vision</h2>
        <div className="project-vision">
          {/* Add project vision here */}
          {mentor.vision}
        </div>
        <h2>Mission</h2>
        <div className="project-mission">
          {/* Add project mission here */}
          {mentor.mission}
        </div>
        <h2>Impact</h2>
        <div className="project-impact">
          {/* Add project impact here */}
          {Object.entries(mentor.impact).map(([key, value]) => (
            <div key={key}>
              <h3>{key}</h3>
              <ul>
                {Object.entries(value).map(([k, v]) => (
                  <li key={k}>{k}: {v}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Calculation */}
      <div className="ui segment">
        <h1 className="custom-header">ROI Calculation</h1>
        <div className="ui form">
          <div className="fields">
            <div className="field">
              <label>Initial Investment ($)</label>
              <input type="number" id="initialInvestment" />
            </div>
            <div className="field">
              <label>Annual Revenue ($)</label>
              <input type="number" id="annualRevenue" />
            </div>
            <div className="field">
              <label>Annual Cost Savings ($)</label>
              <input type="number" id="annualCostSavings" />
            </div>
          </div>
          <button className="ui button" onClick={calculateROI}>
            Calculate ROI
          </button>
        </div>
        {/* Display calculated ROI */}
        {roi && (
          <div className="ui message">
            <p>ROI: {roi}%</p>
          </div>
        )}
      </div>

      {/* Impact Assessment */}
      <div className="ui segment">
        <h1 className="custom-header">Impact Assessment</h1>
        {/* Container for the chart */}
        <canvas id="impactChart" width="800" height="400"></canvas>
      </div>

      {/* Mentor actions */}
      <div className="ui segment">
        <div className="ui fluid buttons">
          <button className="ui button" id="conversation-btn" onClick={handleConversation}>
            <b className="ui colored header">Start a Conversation</b>
          </button>
          <button className="or"></button>
          <button className="ui button" id="meeting" onClick={handleBooking}>
            <b className="ui colored header">Book a Meeting</b>
          </button>
        </div>
        <div className="ui padded segment centered">
          <div className="book-mentor">
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" />
          </div>
          <div>
            <br></br>
          </div>
          <div className="book-mentor">
            <label htmlFor="time">Time: </label>
            <input type="time" name="time" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentordetails;
