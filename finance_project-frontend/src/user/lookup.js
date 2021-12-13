import { backendLookup } from "../lookup";

export const apiLogin = (username, password, callback) => {
  const endpoint = "/auth/jwt/create/";
  const data = {
    username: username,
    password: password,
  };
  backendLookup("post", endpoint, callback, data);
};
