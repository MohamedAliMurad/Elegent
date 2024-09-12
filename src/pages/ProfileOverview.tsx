// src/pages/ProfileOverview.tsx
import React from 'react';

const ProfileOverview: React.FC = () => {
  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Profile Overview</h1>
      <p className="text-gray-600">Welcome to your profile overview. Here you can see your personal information and recent activities.</p>
      
      {/* Add more details as needed */}
      <div className="mt-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800">Recent Projects</h2>
        <ul className="mt-2 space-y-2">
          <li className="p-4 bg-gray-100 rounded-lg shadow text-gray-800">Project 1 - Completed</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow text-gray-800">Project 2 - In Progress</li>
          <li className="p-4 bg-gray-100 rounded-lg shadow text-gray-800">Project 3 - Pending</li>
        </ul>
      </div>
      
      {/* More sections can be added here */}
    </div>
  );
};

export default ProfileOverview;
