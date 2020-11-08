import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cors from "cors";

import { setupInstance, InstanceConfig } from "./axios";
import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import { tripServices } from "./routes/trip-service";

const apiBaseUrlConfig: InstanceConfig = {
  tripApi: "http://localhost:9000/trips",
};
const app = express();

// setup app
app.use(json());
app.use(cors());

// setup axios
setupInstance(apiBaseUrlConfig);

// service
app.use(tripServices);

app.all("*", async (_req, _res) => {
  throw new NotFoundError();
});

// errorHandler
app.use(errorHandler);

export { app };
