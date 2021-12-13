import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./user";
import "./App.css";
import { AiOutlineStock } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="background">
        <h1
          style={{ color: "#ebebeb", textAlign: "center", paddingTop: "70px" }}
        >
          <span style={{ paddingRight: "20px" }}>Stocks</span>
          <AiOutlineStock />
        </h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
