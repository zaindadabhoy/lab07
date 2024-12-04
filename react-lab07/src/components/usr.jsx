import React from 'react';

function usr({ user }) {
  return (
    <div className="user-card-content">
      <div className="user-image">
        {/* Profile picture (assuming you have a URL for the profile image) */}
        <img
          src={user.profileImage}
          alt={user.name}
          className="user-profile-image"
        />
      </div>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Role:</strong> {user.weight}</p>
      </div>
    </div>
  );
}

export default usr;
