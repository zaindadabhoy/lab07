import React from 'react';
import './App.css'; // Import global styles
import Usr from './components/usr';
import Stat from './components/stat';
import Msg from './components/msg';

function App() {

  const user1 = {
    name: "Nicolas jackson",
    email:"abc@yahoo.com",
    age: 25,
    weight: "Student",
    profileImage: "pfp08.jpg", // Add the profile image URL here
  };

  const user2 = {
    totalUsers: 1500,
    activeUsers: 900,
    newSignups: 100,
    activepercentage: (900 / 1500) * 100,
  };

  const user3 = {
    msg1: "Welcome to Dashboard",
    msg2: "You are doing great",
    msg3: "Keep working Hard",
  };

  return (
    <div className="app-container">
      <div className="dashboard">
        <div className="card user-card">
          <Usr user={user1} />
        </div>

        <div className="card stats-card">
          <Stat stat={user2} />
        </div>

        <div className="card msg-card">
          <Msg msg={user3} />
        </div>
      </div>
    </div>
  );
}

export default App;
