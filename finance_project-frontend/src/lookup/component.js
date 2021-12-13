export const backendLookup = async (method, endpoint, callback, data) => {
  const axios = require("axios");
  const headers = {
    "Content-Type": "application/json",
  };
  const auth_token = localStorage.getItem("token");
  if (auth_token) {
    headers.Authorization = `JWT ${auth_token}`;
  }
  const url = `http://127.0.0.1:8000/api${endpoint}`;
  try {
    const response = await axios({
      method: method,
      url: url,
      headers: headers,
      data: data,
    });
    console.log("response ", response, " status ", response.status);
    callback(response, response.status);
  } catch (error) {
    console.log(error.response, error.response.status);
    callback(error.response, error.response.status);
  }
};
