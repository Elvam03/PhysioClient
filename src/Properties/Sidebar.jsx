import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false); // Sidebar starts closed
  const location = useLocation(); // Get the current route

  // Close the sidebar whenever the route changes
  useEffect(() => {
    setOpen(false); // Close the sidebar
  }, [location.pathname]); // Run this effect when the route changes

  const Menus = [
    { title: "Account", src: "user4", path: "/account" },
    { title: "Recommended", src: "recomm2", path: "/recommended" },
    { title: "Progress", src: "loading", path: "/progress" },
    { title: "Schedule", src: "calendar", path: "/schedule" },
    { title: "Library", src: "video-player", path: "/library", gap: true },
    { title: "Community", src: "people", path: "/community" },
    { title: "Clinics", src: "building", path: "/clinics", gap: true },
    { title: "Physios'", src: "physiotherapist", path: "/physios" },
    { title: "Settings", src: "settings", path: "/settings", gap: true},
  ];

  return (
    <div className="relative">
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-full p-5 pt-6 bg-gray-200 absolute top-0 left-0 z-20 overflow-y-auto`}
      >
        {/* Menu Button */}
      <img
        src="./src/assets/menu.png"
        className="absolute top-4 left-4 z-30 cursor-pointer w-10 h-10 overflow-y auto"
        alt="Menu"
        onClick={() => setOpen(!open)}
      />
        {/* Logo and Title */}
        <div className="flex gap-x-4 items-center mt-10">
          <img
            src="./src/assets/Untitled design3.png"
            alt="Logo Image"
            className={`cursor-pointer duration-500 h-10 w-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-teal-500 origin-left font-bold text-3xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            P.C.N
          </h1>
        </div>

        {/* Menu */}
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md 
                ${
                  menu.gap ? "mt-6" : "mt-2"
                } ${location.pathname === menu.path ? "bg-white" : "hover:bg-white"}`}
            >
              <Link to={menu.path} className="flex items-center gap-x-4">
                <img
                  src={`./src/assets/${menu.src}.png`}
                  className="h-6 w-6 shrink-0"
                  alt={`${menu.title} Icon`}
                />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      

      {/* Main Content */}
      <div
        className={`pl-20 pt-6 text-3xl font-semibold flex h-screen bg-gray-100 z-10`}
      >
        {/* Main content goes here */}
        <h2></h2>
      </div>
    </div>
  );
}

export default Sidebar;
