import Axios, { AxiosInstance } from "axios";

export const axios: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_VERSION || "http://localhost:4000",
});
