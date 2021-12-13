import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import { Login } from "./user";
import { StockList } from "./stocks";

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
            <Route path="/stocks" element={<StockList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
