import { Request } from "express";

interface Trip {
  title: string;
  eid: string;
  url: string;
  description: string;
  photos: [string];
  tags: [string];
}

type TripQuery = {
  keyword?: string;
};

interface TripRequest extends Request {
  query: TripQuery;
}

export { TripRequest, Trip };
