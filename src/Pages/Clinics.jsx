import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Clinics = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

  const clinics = [
    { name: "City Clinic", location: "Nairobi", specialty: "Fitness", rating: 4.5 },
    { name: "Wellness Hospital", location: "Nakuru", specialty: "Rehabilitation", rating: 4.2 },
    { name: "Sunshine Medical", location: "Eldoret", specialty: "Sports", rating: 4.7 },
    { name: "KeepFit Center", location: "Nairobi", specialty: "Weight Management", rating: 4.7 },

  ];

  const advertisements = [
    { title: "Premium Care Clinic", link: "#", image: "/public/Images/hospital1.jpg", description: "Advanced treatments with top doctors." },
    { title: "Health First Medical", link: "#", image: "/public/Images/hospital2.jpg", description: "Your health, our priority." },
    { title: "Family Wellness Center", link: "#", image: "/public/Images/hospital3.jpg", description: "Comprehensive family health services." },
    
  ];

  const filteredClinics = clinics.filter((clinic) => {
    return (
      (searchTerm === "" || clinic.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedLocation === "" || clinic.location.includes(selectedLocation)) &&
      (selectedSpecialty === "" || clinic.specialty.includes(selectedSpecialty))
    );
  });

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows for smaller screens
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div>
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

      <div className="container mx-auto p-4 bg-gray-100 h-screen">
        {/* Advertisements Section */}
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-10 mt-5">
          <Slider {...settings}>
            {advertisements.map((ad, index) => (
              <div key={index} className="border rounded-lg shadow-lg p-4">
                <img src={ad.image} alt={ad.title} className="w-full h-48 object-cover rounded-md mb-2" />
                <h3 className="text-lg font-semibold">{ad.title}</h3>
                <p className="text-gray-600 text-sm">{ad.description}</p>
                <a
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Visit
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Search Bar with Filters */}
        <div className="flex space-x-4 mb-4 mt-7">
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
            <option value="Eldoret">Eldoret</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Nakuru">Nakuru</option>
          </select>
        </div>

        {/* Clinic Listings */}
        <h1 className="text-2xl font-semibold text-center m-3 text-gray-500">Recently visited</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
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
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white p-3 rounded mt-3 mb-3">View More</button>
          </div>

      </div>
    </div>
  );
};

export default Clinics;
