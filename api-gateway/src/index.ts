import express from "express";
import { json } from "body-parser";

import { tripServices } from "./routes/tripService";

const app = express();

app.use(json());

app.use(tripServices);

app.all("*", async (_req, res) => {
  return res.send("Hello server API");
});

app.listen(3000, () => {
  console.log("server is run on port 3000");
});
