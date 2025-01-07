import React, { useState } from "react";

const Clinics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const clinics = [
    { name: "City Clinic", location: "New York, NY", specialty: "Physiotherapy", rating: 4.5 },
    { name: "Wellness Hospital", location: "Los Angeles, CA", specialty: "Cardiology", rating: 4.2 },
    { name: "Sunshine Medical", location: "Chicago, IL", specialty: "Pediatrics", rating: 4.7 },
    // Add more clinics as needed
  ];

  const filteredClinics = clinics.filter((clinic) => {
    return (
      (searchTerm === "" || clinic.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedLocation === "" || clinic.location.includes(selectedLocation)) &&
      (selectedSpecialty === "" || clinic.specialty.includes(selectedSpecialty))
    );
  });

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

    <div className="container mx-auto p-4">
      {/* Search Bar with Filters */}
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search for clinics"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-full"
        />
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Location</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="Chicago, IL">Chicago, IL</option>
          {/* Add more locations */}
        </select>
        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Specialty</option>
          <option value="Physiotherapy">Physiotherapy</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Pediatrics">Pediatrics</option>
          {/* Add more specialties */}
        </select>
      </div>

      {/* Clinic Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredClinics.map((clinic, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{clinic.name}</h3>
            <p>{clinic.location}</p>
            <p>Specialty: {clinic.specialty}</p>
            <div className="flex items-center">
              <span className="text-yellow-400">{'★'.repeat(Math.round(clinic.rating))}</span>
              <span className="ml-2">{clinic.rating}</span>
            </div>
            <button className="mt-2 text-blue-600 hover:underline">View Details</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Clinics;
