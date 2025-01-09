
import React, { useState } from "react";

const Physios = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const specialties = [
    { name: "Sports Therapy", id: "sports" },
    { name: "Rehabilitation", id: "rehab" },
    { name: "Pain Management", id: "pain" },
    { name: "Fitness", id: "fitness" },
    { name: "Weight Management", id: "weight" },


  ];

  const physiotherapists = {
    sports: [
      { name: "John Doe", location: "Nairobi", rating: 4.8, bio: "Specializes in sports injuries and rehabilitation." },
      { name: "Emily Brown", location: "Nakuru", rating: 4.6, bio: "Focuses on athletic performance and recovery." },
    ],
    rehab: [
      { name: "Jane Smith", location: "Kisumu", rating: 4.7, bio: "Expert in post-surgery rehabilitation." },
      { name: "Tom Wilson", location: "Eldoret", rating: 4.5, bio: "Skilled in mobility restoration and strength training." },
    ],
    pain: [
      { name: "Alex Johnson", location: "Kijabe", rating: 4.9, bio: "Expert in managing chronic pain using modern techniques." },
      { name: "Samantha Lee", location: "Kisii", rating: 4.4, bio: "Treats pain through manual therapy and dry needling." },
    ],
    fitness: [
      { name: "Tyler James", location: "Kakamega", rating: 4.9, bio: "Expert in managing chronic pain using modern techniques." },
      { name: "Charlotte Holmes", location: "Mombasa", rating: 4.4, bio: "Treats pain through manual therapy and dry needling." },
    ],
    weight: [
      { name: "David M.", location: "Machakos", rating: 4.9, bio: "Expert in managing chronic pain using modern techniques." },
      { name: "Noel Samuels", location: "Lamu", rating: 4.4, bio: "Treats pain through manual therapy and dry needling." },
    ],
  };

  const filteredPhysios = selectedSpecialty ? physiotherapists[selectedSpecialty] : [];

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

      <div className="container mx-auto p-4 bg-gray-100 h-screen">
       {/* Specialty Filters */}
  <div className="flex flex-wrap gap-2 justify-center mb-6">
    {specialties.map((specialty) => (
      <button
        key={specialty.id}
        onClick={() => setSelectedSpecialty(specialty.id)}
        className={`px-4 py-2 border rounded-lg text-sm ${
          selectedSpecialty === specialty.id
            ? "bg-blue-600 text-white"
            : "bg-white text-blue-600"
        } hover:bg-blue-500 hover:text-white transition`}
      >
        {specialty.name}
      </button>
    ))}
  </div>


     {/* Physio Listings */}
  {selectedSpecialty && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredPhysios.map((physio, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold">{physio.name}</h3>
          <p>{physio.location}</p>
          <div className="flex items-center">
            <span className="text-yellow-400">{'★'.repeat(Math.round(physio.rating))}</span>
            <span className="ml-2">{physio.rating}</span>
          </div>
          <p className="mt-2 text-gray-600">{physio.bio}</p>
          <button className="mt-2 text-blue-600 hover:underline">View Profile</button>
        </div>
      ))}
    </div>
  )}


      {/* No results message */}
      {!selectedSpecialty && (
        <p className="text-center text-gray-600">Please select a specialty to see physiotherapists.</p>
      )}
    </div>
    </div>
  );
};

export default Physios;
