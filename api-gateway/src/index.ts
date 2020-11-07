import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import { errorHandler } from "./middleware/error-handler";
import { NotFoundError } from "./errors/not-found-error";
import { tripServices } from "./routes/trip-service";

const app = express();

app.use(json());

app.use(tripServices);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("server is run on port 3000");
});
