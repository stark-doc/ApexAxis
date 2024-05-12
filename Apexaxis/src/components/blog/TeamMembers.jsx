import React from 'react';
import { teamMembers } from '../../data';

const TeamMembers = () => {
  // Assuming teamMembers array contains at least four members
  const member1 = teamMembers[0];
  const member3 = teamMembers[2];

  return (
    <div className='ui raised segment' style={{ backgroundColor: "#f7f3fe", color: "#333" }}>
      <h2 className='ui centered header' style={{ color: "#333" }}>Blogs</h2>
      {/* First rectangle table */}
      <div className="ui card" style={{ backgroundColor: "#f7f3fe" }}>
        <div className="card content">
          <div className='ui flex container custom-flex-container'>
            <img src={member1.image} className='ui medium circular image' id='custom-image' />
            <div className='content'>
              <h2 className='custom-h2' style={{ color: "#333" }}>{member1.name}</h2>
              <h4 style={{ color: "#333" }}>{member1.role}</h4>
              <p style={{ color: "#333" }}>{member1.background}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Third rectangle table */}
      <div className="ui card" style={{ backgroundColor: "#f7f3fe" }}>
        <div className="card content">
          <div className='ui flex container custom-flex-container'>
            <img src={member3.image} className='ui medium circular image' id='custom-image' />
            <div className='content'>
              <h2 className='custom-h2' style={{ color: "#333" }}>{member3.name}</h2>
              <h4 style={{ color: "#333" }}>{member3.role}</h4>
              <p style={{ color: "#333" }}>{member3.background}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
