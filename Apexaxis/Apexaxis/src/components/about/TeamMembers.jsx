import React, { useRef, useEffect } from 'react';
import "./aboutus.css";
import { teamMembers } from '../../data';

function TeamMembers() {
  // Assuming teamMembers array contains at least four members
  const member1 = teamMembers[0];
  const member2 = teamMembers[1];
  const member3 = teamMembers[2];
  const member4 = teamMembers[3];

  // Refs to store the width of the first and fourth images
  const firstImageRef = useRef(null);
  const fourthImageRef = useRef(null);

  useEffect(() => {
    // Get the width of the first image
    const firstImageWidth = firstImageRef.current.offsetWidth;

    // Set the width of the fourth image to match the width of the first image
    if (fourthImageRef.current) {
      fourthImageRef.current.style.width = `${firstImageWidth}px`;
    }
  }, []);

  return (
    <div className='ui raised segment' style={{ backgroundColor: "#f7f3fe" }}>
      <h2 className='ui centered header'>Our Team</h2>
      {/* First rectangle table */}
      <div className="ui card" style={{ backgroundColor: "#f7f3fe" }}>
        <div className="card content">
          <div className='ui flex container custom-flex-container'>
            <img src={member3.image} className='ui medium circular image' id='custom-image' ref={firstImageRef} />
            <div className='content'>
              <h2 className='custom-h2'>{member3.name}</h2>
              <h4>{member3.role}</h4>
              <p>{member3.background}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Second rectangle table */}
      <div className="ui card" style={{ backgroundColor: "#f7f3fe", marginTop: '20px' }}>
        <div className='card content'>
          <div className='ui flex container custom-flex-container'>
            <div className='content' style={{ flex: 1, textAlign: 'right' }}>
              <h2 className='custom-h2'>{member4.name}</h2>
              <h4>{member4.role}</h4>
              <p>{member4.background}</p>
            </div>
            <img src={member4.image} className='ui medium circular image' id='second-image' ref={fourthImageRef} />
          </div>
        </div>
      </div>

      {/* Third rectangle table */}
      <div className="ui card" style={{ backgroundColor: "#f7f3fe" }}>
        <div className="card content">
          <div className='ui flex container custom-flex-container'>
            <img src={member3.image} className='ui medium circular image' id='custom-image' ref={firstImageRef} />
            <div className='content'>
              <h2 className='custom-h2'>{member3.name}</h2>
              <h4>{member3.role}</h4>
              <p>{member3.background}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth rectangle table */}
      <div className="ui card" style={{ backgroundColor: "#f7f3fe", marginTop: '20px' }}>
        <div className='card content'>
          <div className='ui flex container custom-flex-container'>
            <div className='content' style={{ flex: 1, textAlign: 'right' }}>
              <h2 className='custom-h2'>{member4.name}</h2>
              <h4>{member4.role}</h4>
              <p>{member4.background}</p>
            </div>
            <img src={member4.image} className='ui medium circular image' id='second-image' ref={fourthImageRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMembers;
