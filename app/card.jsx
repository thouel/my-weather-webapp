import Image from 'next/image';
import './card.modules.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Card({ weather }) {
  if (weather == null) return <Skeleton count={8} />;

  return (
    <div className='rounded-md border-4 weather-card text-white'>
      <div className='card-title border-b-4'>
        <span className='font-bold text-lg text-black'>
          {weather.location.name}&nbsp;
        </span>
        <span className='font-light text-sm'>{weather.location.country}</span>
        <span className='text-right font-light text-sm'>
          , at {weather.location.localtime}
        </span>
      </div>
      <div className='grid grid-flow-row grid-cols-3 grid-rows-2 mt-2 gap-2'>
        <div>
          <ul>
            <li>
              <span className='card-important'>
                {weather.current.temperature}°
              </span>
              <span className='card-notimportant'>&nbsp;Measured</span>
            </li>
            <li>
              <span className='card-important'>
                {weather.current.feelslike}°
              </span>
              <span className='card-notimportant'>&nbsp;Feels like</span>
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
            <span className='card-important'>{weather.current.humidity}%</span>
            <span className='card-notimportant'>&nbsp;Humidity</span>
          </p>
          <p>
            <span className='card-important'>{weather.current.uv_index}</span>
            <span className='card-notimportant'>&nbsp;UV Index</span>
          </p>
        </div>
        <div className=''>
          <p>
            <span className='card-notimportant'>
              <span className='text-black'>Visibility</span> at{' '}
              {weather.current.visibility} km
            </span>
          </p>
          <p>
            <span className='card-notimportant'>
              <span className='text-black'>Air pressure</span> at{' '}
              {weather.current.pressure} hPA
            </span>
          </p>
        </div>
        <div>
          <span className='text-black'>Wind </span>
          <span className=''>{weather.current.wind_dir}</span>
          <span className='card-notimportant'>
            &nbsp;{weather.current.wind_speed} km/h,{' '}
            {weather.current.wind_degree}°
          </span>
          <p className='card-notimportant'>
            {weather.current.precip <= 0
              ? 'No precipitation actually'
              : 'Raining (' + weather.current.precip + 'mm/h)'}
          </p>
        </div>
      </div>
    </div>
  );
}
