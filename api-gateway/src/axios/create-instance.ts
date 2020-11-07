import axios, { AxiosInstance } from "axios";

const createInstance = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
  });
  return instance;
};

export default createInstance;
