import { AxiosInstance } from "axios";
import createInstance from "./create-instance";

let tripApi: AxiosInstance;

interface InstanceConfig {
  tripApi: string;
}

const setupInstance = (config: InstanceConfig) => {
  tripApi = createInstance(config["tripApi"]);
};

export { setupInstance, InstanceConfig, tripApi };
