import React, { useState, useEffect } from "react";

function Account() {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    location: "",
  });
  const [profileCompletion, setProfileCompletion] = useState(0);

  const totalFields = Object.keys(profileData).length;

  useEffect(() => {
    calculateCompletion();
  }, [profileData]);

  const calculateCompletion = () => {
    const completedFields = Object.values(profileData).filter(Boolean).length;
    const percentage = Math.round((completedFields / totalFields) * 100);
    setProfileCompletion(percentage);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
    setProfileData((prevData) => ({
      ...prevData,
      ...updatedData,
    }));
    setModalOpen(false);
  };

  return (
    <section className="min-h-screen bg-gray-100 pb-2">
      {/* Navbar */}
      <div className="sticky top-0 z-10">
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
     

      {/* Profile Section */}
      <div className="min-h-screen bg-gray-100">
        <div
          className="relative bg-cover bg-center h-64"
          style={{
            backgroundImage: "url('../src/assets/Background img.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-60"></div>
        </div>

        <div className="container mx-auto px-6 -mt-20 relative">
          <div className="bg-teal-700 text-white p-6 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src="/src/assets/noprofile.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{profileData.name}</h2>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Profile Details</h3>
              <div className="space-y-2">
                <p>
                  <strong>Name:</strong> {profileData.name}
                </p>
                <p>
                  <strong>Email:</strong> {profileData.email}
                </p>
                <p>
                  <strong>Age:</strong> {profileData.age}
                </p>
                <p>
                  <strong>Phone:</strong> {profileData.phone}
                </p>
                <p>
                  <strong>Location:</strong> {profileData.location}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-sm">Profile Completion: {profileCompletion}%</p>
                <div className="w-full bg-gray-700 rounded-full">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
              </div>
              <button
                className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-700 transition duration-300"
                onClick={() => setModalOpen(true)}
              >
                Finish Setting Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-96 p-2 md:p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Update Profile
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  defaultValue={profileData.name}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Age
                </label>
                <input
                  name="age"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  defaultValue={profileData.age}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full p-2 border rounded-lg"
                  defaultValue={profileData.email}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  name="phone"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  defaultValue={profileData.phone}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  defaultValue={profileData.location}
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Account;
