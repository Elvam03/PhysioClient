import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false); // Sidebar starts closed
  const location = useLocation(); // Get the current route
  const sidebarRef = useRef(null); // Ref for the sidebar

  const Menus = [
    { title: "Account", src: "user4", path: "/account" },
    { title: "Recommended", src: "recomm2", path: "/recommended" },
    { title: "Progress", src: "loading", path: "/progress" },
    { title: "Schedule", src: "calendar", path: "/schedule" },
    { title: "Library", src: "video-player", path: "/library", gap: true },
    { title: "Community", src: "people", path: "/community" },
    { title: "Clinics", src: "building", path: "/clinics", gap: true },
    { title: "Physios'", src: "physiotherapist", path: "/physios" },
    { title: "Settings", src: "settings", path: "/settings", gap: true },
  ];

  // Close the sidebar when the route changes
  useEffect(() => {
    setOpen(false); // Close the sidebar on route change
  }, [location.pathname]);

  // Close the sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 bg-gray-200 p-2 rounded-md shadow-md z-50"
        onClick={() => setOpen(!open)} // Toggle sidebar visibility
      >
        <img src="/Images/menu.png" alt="Menu" className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-gray-200 p-5 z-30 transition-transform duration-300 ${
          open ? "translate-x-0 w-72" : "-translate-x-full"
        }`}
      >
        {/* Logo and Title */}
        <div className="flex gap-x-4 items-center mt-14">
          <img
            src="/Images/Untitled design3.png"
            alt="Logo"
            className="h-10 w-10"
          />
          <h1
            className={`text-teal-500 font-bold text-3xl duration-300 ${
              open ? "block" : "hidden"
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
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md ${
                menu.gap ? "mt-6" : "mt-2"
              } ${
                location.pathname === menu.path ? "bg-white" : "hover:bg-white"
              }`}
            >
              <Link
                to={menu.path}
                className="flex items-center gap-x-4"
                onClick={() => setOpen(false)} // Close sidebar on link click
              >
                <img
                  src={`/Images/${menu.src}.png`}
                  className="h-6 w-6 shrink-0"
                  alt={`${menu.title} Icon`}
                />
                <span
                  className={`origin-left duration-200 ${
                    open ? "block" : "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setOpen(false)} // Close sidebar when clicking outside
        ></div>
      )}
    </div>
  );
}

export default Sidebar;
