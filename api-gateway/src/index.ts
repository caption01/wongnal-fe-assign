import { app } from "./app";
import dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../.env` });

const PORT = process.env.APP_PORT;

const start = () => {
  app.listen(PORT, () => {
    console.log(`server run on port ${PORT} !!`);
  });
};

start();
