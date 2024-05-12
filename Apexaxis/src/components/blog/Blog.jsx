// Blog.js
import React from "react";
import TeamMembers from './TeamMembers'; // Import the TeamMembers component

const Blog = () => {
  return (
    <div className="ui padded segment" style={{backgroundColor:"#F7F3FE"}}>
      <div className="ui three column grid">
        <div className="column">
          {/* Render the first set of TeamMembers */}
          <TeamMembers />
        </div>
        <div className="column">
          {/* Render the second set of TeamMembers */}
          <TeamMembers />
        </div>
        <div className="column">
          {/* Render the third set of TeamMembers */}
          <TeamMembers />
        </div>
      </div>
      {/* Rest of the content */}
    </div>
  );
};

export default Blog;
