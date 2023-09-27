# my-weather-webapp

## What ?

A simple weather webapp giving temperature, wind, pressure, precipitation, humidity, cloud, uv index and visibility.

## How ?

Use [weatherstack.com](https://weatherstack.com/documentation) API. The free version of the API is limited to 1000 calls / month so you need to get your own API_KEY (for free) to play with it.

Components architecture:

- app/layout.jsx: The main layout

- app/page.jsx: The main page. Handles the call to the API when the user wants to get the weather for a new town. It handles the data exchange between the form (town_form.jsx) and the display (card.jsx)

- app/town_form.jsx: Simple single input form

- app/card.jsx: Display the current weather in the town selected by the user

- app/last_towns.jsx: Display the last selected towns

- app/api/weather/route.js: The API handling the call to the external service [weatherstack.com](https://weatherstack.com/documentation) API.

## Try ?

- Fetch repo : git clone...
- Run it: npm run dev
