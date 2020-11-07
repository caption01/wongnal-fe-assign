import request from "supertest";

import { app } from "../../app";

it("fetch all trips in json-server", async () => {
  const response = await request(app).get("/api/trips").expect(200);
  const trips = response.body;

  expect(trips).toHaveLength(10);
});

it("return any match trip from keyword query", async () => {
  const response1 = await request(app)
    .get("/api/trips")
    .query({
      keyword: "กาแฟ",
    })
    .expect(200);

  const trips1 = response1.body;
  expect(trips1).toHaveLength(2);

  const response2 = await request(app)
    .get("/api/trips")
    .query({
      keyword: "เกาะช้าง",
    })
    .expect(200);

  const trips2 = response2.body;
  expect(trips2).toHaveLength(1);
});

it('not return any data if req.query not equal "keyword"', async () => {
  await request(app).get("/api/trips?name=nutchapon").expect(409);
});

it("query match by title", async () => {
  const response = await request(app)
    .get("/api/trips")
    .query({
      keyword: "เที่ยวทุ่งทานตะวันชลบุรี",
    })
    .expect(200);

  const trips = response.body;
  const title = trips[0].title;

  expect(title).toEqual(expect.stringContaining("เที่ยวทุ่งทานตะวันชลบุรี"));
});

it("query match by description", async () => {
  const response = await request(app)
    .get("/api/trips")
    .query({
      keyword: "ไปเที่ยวไต้หวันจุใจ",
    })
    .expect(200);

  const trips = response.body;
  const description = trips[0].description;

  expect(description).toEqual(expect.stringContaining("ไปเที่ยวไต้หวันจุใจ"));
});

it("query match by tag", async () => {
  const response = await request(app)
    .get("/api/trips")
    .query({
      keyword: "ไต้หวัน",
    })
    .expect(200);

  const trips = response.body;
  const tags = trips[0].tags;

  expect(tags).toEqual(expect.arrayContaining(["ไต้หวัน"]));
});

it("should return empty[] if not match any trip", async () => {
  const response = await request(app)
    .get("/api/trips")
    .query({
      keyword: "this should not match",
    })
    .expect(200);

  const trips = response.body;

  expect(trips).toHaveLength(0);
});
