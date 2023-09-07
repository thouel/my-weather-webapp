import Image from 'next/image';
import './card.modules.css';

export default function Card({ weather }) {
  if (weather == null) return <h2>Loading...</h2>;

  return (
    <div className='rounded-md border-4 weather-card'>
      <div className='grid grid-flow-row grid-cols-3 grid-rows-2'>
        <div>
          <span className='font-bold'>Temperature:</span>
          <ul>
            <li>
              <span className='ml-2'>
                Measured {weather.current.temperature}°
              </span>
            </li>
            <li>
              <span className='ml-2'>
                Feels like {weather.current.feelslike}°
              </span>
            </li>
          </ul>
        </div>
        <div className='row-span-2 text-center'>
          <Image
            src={weather.current.weather_icons[0]}
            width={450}
            height={450}
            alt={weather.current.weather_descriptions[0]}
          />
        </div>
        <div>
          <p>
            <span className='font-bold'>Air humidity: </span>
            {weather.current.humidity}%
          </p>
          <p>
            {weather.current.precip <= 0
              ? 'No precipitation actually'
              : 'Raining (' + weather.current.precip + 'mm/h)'}
          </p>
          <p>
            <span className='font-bold'>UV Index: </span>
            {weather.current.uv_index}
          </p>
        </div>
        <div className=''>
          <p>
            <span className='font-bold'>Visibility at </span>
            {weather.current.visibility} km
          </p>{' '}
          <p>
            <span className='font-bold'>Air pressure at </span>{' '}
            {weather.current.pressure} hPA
          </p>
        </div>
        <div>
          <span className='font-bold'>Wind:</span>
          <ul>
            <li>
              {weather.current.wind_speed} km/h, to {weather.current.wind_dir} (
              {weather.current.wind_degree}°)
            </li>
          </ul>
        </div>
      </div>
      <div className='text-right font-light text-sm'>
        in {weather.location.name} ({weather.location.country}), at{' '}
        {weather.location.localtime}
      </div>
    </div>
  );
}
