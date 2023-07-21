const request = require("supertest");
const app = require("./app");
const config = require("./config");

describe(`GET ${config.luke_starships}`, () => {
  it("should return a list of the Starships related to Luke Skywalker", async () => {
    const res = await request(app).get(config.luke_starships);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(2);
    expect(res.body).toContain("X-wing");
    expect(res.body).toContain("Imperial shuttle");
  }, 30000);
});

describe(`GET ${config.episode1_classification}`, () => {
  it("should return the classification of all species in the 1st episode", async () => {
    const res = await request(app).get(config.episode1_classification);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(5);
    expect(res.body[0]).toHaveProperty("name", "Human");
    expect(res.body[0]).toHaveProperty("classification", "mammal");
  }, 30000);
});

describe(`GET ${config.population}`, () => {
  it("should return the total population of all planets in the Galaxy", async () => {
    const res = await request(app).get(config.population);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("totalPopulation");
  }, 30000);
});
