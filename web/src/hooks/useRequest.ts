import useSWR from "swr";
import { axios } from "../axios";

type Method = "get";

interface Request {
  method: Method;
  url: string;
  params?: object;
}

const useRequest = (request: Request) => {
  const key = request && JSON.stringify(request);
  const paramsString = request?.params ? JSON.stringify(request?.params) : "";

  const { data, error } = useSWR([key, paramsString], () =>
    axios(request || {}).then((response) => response.data)
  );

  const loading = !data && !error;

  return { data, error, loading };
};

export default useRequest;
