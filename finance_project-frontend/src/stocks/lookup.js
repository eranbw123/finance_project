import { backendLookup } from "../lookup";

export const apiFavoriteStocks = (callback) => {
  const endpoint = "http://127.0.0.1:8000/api/stocks/";
  backendLookup("get", endpoint, callback);
};
