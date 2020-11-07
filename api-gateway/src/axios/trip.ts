import { tripApi } from "./index";
import { Trip } from "../type";

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
