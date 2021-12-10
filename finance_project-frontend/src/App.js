import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
const axios = require("axios");

function App() {
  const testBackendCall = async () => {
    const username = "eranbw123";
    const password = "123123123";
    const url = "http://127.0.0.1:8000/auth/jwt/create/";
    // axios.defaults.baseURL = "test";
    // console.log(url);
    // const response = await axios.post(url, );

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });
    const serverResponse = await response.json();
    console.log(serverResponse.status, serverResponse);
  };

  useEffect(() => {
    testBackendCall();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
