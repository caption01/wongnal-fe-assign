import { Router, Response } from "express";

import { getAllTrips, searchTrips } from "../axios/trip";
import { TripRequest } from "../type";

const router = Router();

router.get("/api/trips", async (req: TripRequest, res: Response) => {
  const { keyword } = req.query;

  if (!keyword) {
    const trips = await getAllTrips();
    return res.send(trips);
  }

  const trips = await searchTrips(keyword);
  return res.send(trips);
});

export { router as tripRouteService };
