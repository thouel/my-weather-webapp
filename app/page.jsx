'use client';
import { useEffect, useState } from 'react';
import Card from './card';
import TownForm from './town_form';
import LastTowns from './last_towns';

export default function Page() {
  const [weather, setWeather] = useState(null);
  const [currentTown, setCurrentTown] = useState(null);
  const [lastTowns, setLastTowns] = useState([]);
  const [error, setError] = useState('');

  function addToLastTowns(data) {
    // this town is already in the list
    if (lastTowns.indexOf(data) != -1) {
      return;
    }

    setLastTowns((lastTowns) => [...lastTowns, data]);
  }

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
          console.log(result);
          const j = await result.json();
          console.log(j.message);
          if (j.message != null) {
            setError(j.message);
          } else {
            setWeather(j);
            addToLastTowns(j.location.name);
            setError('');
          }
        });
      }
      fetchWeather(currentTown);
    },
    [currentTown]
  );

  return (
    <>
      <TownForm
        callback={setCurrentTown}
        error={error}
      />
      <Card weather={weather} />
      <LastTowns
        lastTowns={lastTowns}
        updateTown={setCurrentTown}
      />
    </>
  );
}
