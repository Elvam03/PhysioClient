import React, { useState } from "react";

const Settings = () => {
  const [selectedSection, setSelectedSection] = useState("profile");

  return (
    <div>
        {/* Navbar */}
        <nav className="bg-white flex flex-col">
        <div className="text-center p-2">
          <span className="text-lg lg:text-4xl text-blue-800 font-semibold p-2">
            PhysioCare
          </span>
          <span className="text-lg lg:text-4xl text-teal-500 font-semibold">
            Network
          </span>
          
        </div>
        <div className="text-center text-gray-400 pb-2 text-sm md:text-md">
            <h1>Making you better</h1>
        </div>
      </nav>

    <div className="flex flex-col lg:flex-row">
      {/* Sidebar (Tabbed Navigation) */}
      <div className="w-full lg:w-1/4 bg-gray-100 p-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <div className="lg:flex lg:flex-col">
          <ul className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
            <li
              onClick={() => setSelectedSection("profile")}
              className="cursor-pointer hover:text-blue-500 w-full text-center lg:text-left p-2 border-b-2 lg:border-none lg:border-b-2"
            >
              Profile
            </li>
            <li
              onClick={() => setSelectedSection("notifications")}
              className="cursor-pointer hover:text-blue-500 w-full text-center lg:text-left p-2 border-b-2 lg:border-none lg:border-b-2"
            >
              Notifications
            </li>
            <li
              onClick={() => setSelectedSection("security")}
              className="cursor-pointer hover:text-blue-500 w-full text-center lg:text-left p-2 border-b-2 lg:border-none lg:border-b-2"
            >
              Security
            </li>
            <li
              onClick={() => setSelectedSection("language")}
              className="cursor-pointer hover:text-blue-500 w-full text-center lg:text-left p-2 border-b-2 lg:border-none lg:border-b-2"
            >
              Language & Region
            </li>
            <li
              onClick={() => setSelectedSection("account")}
              className="cursor-pointer hover:text-blue-500 w-full text-center lg:text-left p-2 border-b-2 lg:border-none lg:border-b-2"
            >
              Account Management
            </li>
            <li
              onClick={() => setSelectedSection("data")}
              className="cursor-pointer hover:text-blue-500 w-full text-center lg:text-left p-2 border-b-2 lg:border-none lg:border-b-2"
            >
              Data & Privacy
            </li>
            <li
              onClick={() => setSelectedSection("preferences")}
              className="cursor-pointer hover:text-blue-500 w-full text-center lg:text-left p-2 border-b-2 lg:border-none lg:border-b-2"
            >
              App Preferences
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full lg:w-3/4 p-6">
        {selectedSection === "profile" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Profile Settings</h3>
            <div className="mb-4">
              <label className="block">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block">Profile Picture</label>
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}

        {selectedSection === "notifications" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Notification Settings</h3>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Email Notifications</label>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>Push Notifications</label>
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label>In-App Notifications</label>
            </div>
          </div>
        )}

        {selectedSection === "security" && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Security Settings</h3>
            <div className="mb-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Enable Two-Factor Authentication
              </button>
            </div>
            <div className="mb-4">
              <h4 className="text-lg">Recent Activity</h4>
              <ul>
                <li>Logged in from New York, NY on Jan 1, 2025</li>
                <li>Logged in from Los Angeles, CA on Dec 28, 2024</li>
              </ul>
            </div>
          </div>
        )}

        {/* Add other sections here similar to profile, notifications, and security */}
      </div>
    </div>
    </div>
  );
};

export default Settings;
