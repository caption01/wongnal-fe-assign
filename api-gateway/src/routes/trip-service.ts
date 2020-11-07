import { Router, Response } from "express";

import { TripRequest } from "../type";
import { checkObjectEmpty } from "../helper/check-empty";
import { QueryError } from "../errors/query-error";

import { getAllTrips, searchTrips } from "../axios/trip";

const router = Router();

router.get("/api/trips", async (req: TripRequest, res: Response) => {
  const { keyword, ...restQuery } = req.query;

  if (!checkObjectEmpty(restQuery)) {
    throw new QueryError("found something incorrect");
  }

  if (!keyword) {
    const trips = await getAllTrips();
    return res.send(trips);
  }

  const trips = await searchTrips(keyword);
  return res.send(trips);
});

export { router as tripServices };
