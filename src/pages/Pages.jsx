import React from "react";
import { Route, Routes } from "react-router-dom";
import Searched from "../components/Searched";

function Pages() {
  return (
    <Routes>
      {/* <Route path="/" element={} /> */}
      <Route path="/rent" element={<Searched />} />
      {/* <Route path="/Skills" element={} /> */}
      {/* <Route path="/Contact" element={} /> */}
    </Routes>
  );
}
export default Pages;
