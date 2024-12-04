import React from 'react';

function stat({ stat }) {
  return (
    <div className="stats-card-content">
      <p><strong>Total Users:</strong> {stat.totalUsers}</p>
      <p><strong>Active Users:</strong> {stat.activeUsers}</p>
      <p><strong>New Signups:</strong> {stat.newSignups}</p>
      
      <div className="progress-container">
        <p><strong>Active Percentage:</strong></p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${stat.activepercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default stat;
