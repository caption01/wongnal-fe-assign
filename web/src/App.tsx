import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Header, Content } from "./sections";
import { Layout, Search, TripCard, Spiner } from "./components";
import { Trip } from "./components/types";
import { useDebounce, useRequest, useQuery } from "./hooks";

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

const App: React.FC = () => {
  const query = useQuery();
  const history = useHistory();

  const keywordQuery = query.get("keyword") || "";

  const [keyword, setKeyword] = useState(keywordQuery);
  const value = useDebounce(keyword, 1500) as string;
  const { data, loading } = useRequestTrips(value);

  const handleSearch = (value: string) => {
    setKeyword(value);
  };

  const openNewWindowTab = (url: string): void => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (value === "") {
      history.push(`/`);
      return;
    }
    history.push(`/?keyword=${value}`);
  }, [value, history]);

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
                <TripCard
                  key={trip.eid}
                  {...trip}
                  cardHigh={350}
                  onTagSelect={handleSearch}
                  openNewWindowTab={openNewWindowTab}
                />
              );
            })}
          </>
        )}
      </Content>
    </Layout>
  );
};

export default App;
