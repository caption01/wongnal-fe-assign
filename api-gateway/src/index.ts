import { app } from "./app";

const start = () => {
  app.listen(3000, () => {
    console.log("tickets run on port 3000 !!");
  });
};

start();
