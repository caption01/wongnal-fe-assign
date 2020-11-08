import React, { useState } from "react";

import { Header, Content } from "./sections";
import { Layout, Search, TripCard, Spiner } from "./components";
import { Trip } from "./components/types";
import { useDebounce, useRequest } from "./hooks";

type TripsResponse = {
  data: Trip[];
  loading: boolean;
};

const useRequestTrips = (keyword: string): TripsResponse => {
  const endPoint = `/api/trips`;
  const params = { keyword };

  const axiosConfig = {
    method: "get" as "get",
    url: endPoint,
    params,
  };

  const { data, loading } = useRequest(axiosConfig);
  return { data, loading };
};

const App = () => {
  const [keyword, setKeyword] = useState("");
  const value = useDebounce(keyword, 2000) as string;
  const { data, loading } = useRequestTrips(value);

  const handleSearch = (value: string) => {
    setKeyword(value);
  };

  return (
    <Layout>
      <Header title="เที่ยวไหนดี">
        <Search
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          onSearch={handleSearch}
          keyword={keyword}
        />
      </Header>
      <Content>
        {loading ? (
          <Spiner loading={loading} />
        ) : (
          <>
            {data?.map((trip) => {
              return (
                <TripCard key={trip.eid} {...trip} onTagSelect={handleSearch} />
              );
            })}
          </>
        )}
      </Content>
    </Layout>
  );
};

export default App;
