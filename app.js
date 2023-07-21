const express = require("express");
const axios = require("axios");
const app = express();

require("dotenv").config();
const baseURL = process.env.BASE_URL;
const config = require("./config");

// Endpoint to return a list of the Starships related to Luke Skywalker
app.get(config.luke_starships, async (req, res) => {
  try {
    const luke = await axios.get(`${baseURL}/people/1/`);
    const starships = await Promise.all(
      luke.data.starships.map(async (url) => {
        const response = await axios.get(url);
        return response.data.name;
      })
    );
    res.json(starships);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint to return the classification of all species in the 1st episode
app.get(config.episode1_classification, async (req, res) => {
  try {
    const episode1 = await axios.get(`${baseURL}/films/1/`);
    const speciesUrls = episode1.data.species;
    const species = await Promise.all(
      speciesUrls.map(async (url) => {
        const response = await axios.get(url);
        return {
          name: response.data.name,
          classification: response.data.classification,
        };
      })
    );
    res.json(species);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint to return the total population of all planets in the Galaxy
app.get(config.population, async (req, res) => {
  try {
    let totalPopulation = 0;
    let url = `${baseURL}/planets`;
    while (url) {
      const response = await axios.get(url);
      response.data.results.forEach((planet) => {
        if (planet.population !== "unknown") {
          totalPopulation += parseInt(planet.population);
        }
      });
      url = response.data.next;
    }
    res.json({ totalPopulation: totalPopulation });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = app;
