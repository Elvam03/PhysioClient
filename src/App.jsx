
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Properties/Sidebar";
import Account from "./Pages/Account"
import Clinics from "./Pages/Clinics"
import Community from "./Pages/Community"
import Library from "./Pages/Library"
import Physio from "./Pages/Physios"
import Progress from "./Pages/Progress"
import Schedule from "./Pages/Schedule"
import Settings from "./Pages/Settings"
import Recommended from "./Pages/Recommended"
import React, { useState } from "react";




function App() {
  return(

    <div className="flex">
    <Sidebar />
      
       <div  className="flex-grow">
    <Routes>

      <Route index element = {<Account/>} />
      <Route path="/account" element={<Account />} />
      <Route path="/progress" element={<Progress/>} />
      <Route path="/schedule" element={<Schedule/>} />
      <Route path="/library" element={<Library/>} />
      <Route path="/community" element={<Community/>} />
      <Route path="/clinics" element={< Clinics/>} />
      <Route path="/physios" element={<Physio/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/recommended" element={<Recommended/>} />


    </Routes>

  </div>

    </div>
   

  )
 
}

export default App;

