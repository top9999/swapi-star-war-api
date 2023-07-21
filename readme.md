# Star Wars API Challenge

This is a REST API that queries the Star Wars API and provides information on how to beat the Galactic Empire.

## Getting Started

To get started, clone this repository and run `npm install` to install the required dependencies.

Then, start the server by running `npm start`.

## API Endpoints

The following endpoints are available:

### `GET /luke-starships`

Returns a list of the Starships related to Luke Skywalker.

Example response:

[
"X-wing",
"Imperial shuttle"
]

### `GET /episode1-species-classifications`

Returns the classification of all species in the 1st episode.

Example response:

[
{
"name": "Human",
"classification": "mammal"
},
{
"name": "Droid",
"classification": "artificial"
},
...
]

### `GET /population`

Returns the total population of all planets in the Galaxy.

Example response:

{
"totalPopulation": 1711401432500
}

## Running Tests

To run the tests, run `npm test`.

Please note that the code provided is just an example and may not work as is. It is important to thoroughly test and debug the code before submitting the solution.

I hope this gives you an idea of how the code files and readme.md file could be structured for this coding challenge!
