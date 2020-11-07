import { AxiosInstance } from "axios";

import createAxiosInstance from "./index";
import { Trip } from "../type";

const JSON_SERVER_URL = "http://localhost:9000/trips";

const tripApi: AxiosInstance = createAxiosInstance(JSON_SERVER_URL);

export const getAllTrips = async (): Promise<Trip[] | []> => {
  const response = await tripApi.get("/");
  const trips = response.data || [];
  return trips;
};

export const searchTrips = async (keyword: string): Promise<Trip[] | []> => {
  const response = await tripApi.get("/", {
    params: {
      q: keyword,
    },
  });

  const trips: Trip[] = response.data || [];
  return trips;
};
