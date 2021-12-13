import { backendLookup } from "../lookup";

export const apiLogin = (username, password, callback) => {
  const endpoint = "http://127.0.0.1:8000/api/auth/jwt/create/";
  const data = {
    username: username,
    password: password,
  };
  backendLookup("post", endpoint, callback, data);
};
