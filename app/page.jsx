'use client';
import { useEffect, useState } from 'react';
import Card from './card';
import TownForm from './town_form';

export default function Page() {
  const [weather, setWeather] = useState(null);
  const [currentTown, setCurrentTown] = useState(null);
  useEffect(
    function effectFunction() {
      async function fetchWeather(data) {
        if (data == null || data == '') return;

        console.log(`Town:${data}`);

        setWeather(null);

        // Pass it to some API
        await fetch('/api/weather', {
          method: 'post',
          body: JSON.stringify({ town: data }),
          headers: {
            'content-type': 'application/json',
          },
        }).then(async (result) => {
          setWeather(await result.json());
        });
      }
      fetchWeather(currentTown);
    },
    [currentTown]
  );

  return (
    <>
      <TownForm callback={setCurrentTown} />
      <Card weather={weather} />
    </>
  );
}
