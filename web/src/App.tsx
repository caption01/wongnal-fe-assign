import React from "react";

import { Header, Content } from "./sections";
import { Layout, Search, TripCard } from "./components";

const mockTrip = [
  {
    title: "เกาะช้าง",
    eid: "1",
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus cum nam amet illum, facilis explicabo quaerat aliquam provident at maxime, vero quidem magni aspernatur quia quis quod veritatis? Repudiandae?",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
    ],
    tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
  },
  {
    title: "เกาะหลีเปะ",
    eid: "2",
    url: "https://www.wongnai.com/trips/travel-koh-lipe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus cum nam amet illum, facilis explicabo quaerat aliquam provident at maxime, vero quidem magni aspernatur quia quis quod veritatis? Repudiandae?",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/31/9969a296fe1b452a8e64c2b7cfd58319.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/31/58348f4c3ace47349e80e5930a7a525a.jpg",
    ],
    tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
  },
];

const App = () => {
  return (
    <Layout>
      <Header title="เที่ยวไหนดี">
        <Search />
      </Header>
      <Content>
        <TripCard />
      </Content>
    </Layout>
  );
};

export default App;
