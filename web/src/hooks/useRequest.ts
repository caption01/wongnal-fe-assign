import useSWR from "swr";
import { AxiosResponse } from "axios";

export const useRequest = (
  endpoint: string,
  fetcher: () => AxiosResponse["data"]
) => {
  const { data, error } = useSWR(endpoint, fetcher);

  const loading = !data && !error;

  return { data, error, loading };
};
