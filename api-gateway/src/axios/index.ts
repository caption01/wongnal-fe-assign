import axios, { AxiosInstance } from "axios";

const createAxiosInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
  });
  return instance;
};

export default createAxiosInstance;
