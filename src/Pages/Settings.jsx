import React from "react";

const Settings = () => {
  return (
    <div>
       {/* Navbar */}
       <div className="sticky top-0">

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
   </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg m-5">
        <h1 className="text-2xl font-semibold mb-6 text-center">Settings</h1>

        {/* Profile Settings */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
          {/* Change Profile Picture */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Change Profile Picture</label>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Change Background Picture */}
          <div>
            <label className="block mb-2 font-medium">Change Background Picture</label>
            <input
              type="file"
              className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/*Upadate profile */}
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 m-3">Update Profile Details</button>
          </div>

        </div>

        {/* Account Settings */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
          {/* Change Email */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Change Email</label>
            <input
              type="email"
              placeholder="Enter new email"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Change Password */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Change Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          {/* Forgot Password */}
          <div className="mb-4 text-right">
            <button className="text-blue-600 hover:underline">Forgot Password?</button>
          </div>
          <div className="mb-4 text-right">
            <button className="text-blue-600 hover:underline">Log out</button>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Settings;
