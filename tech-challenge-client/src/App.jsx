import { useState } from "react";
import "./App.css";
import PhoneList from "./components/PhoneList";
import PhoneDetails from "./components/PhoneDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Phone Web</h1>
      <div>
        <PhoneList />
      </div>

      <Routes>
        <Route path="/:phoneid" element={<PhoneDetails />} />
      </Routes>
    </>
  );
}

export default App;
