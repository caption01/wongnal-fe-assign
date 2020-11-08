import { app } from "./app";

const start = () => {
  app.listen(4000, () => {
    console.log("server run on port 4000 !!");
  });
};

start();
