import './last_towns.modules.css';

export default function LastTowns({ lastTowns, updateTown }) {
  if (lastTowns == null || lastTowns.length <= 0) {
    return <p>No town</p>;
  }
  return (
    <div className='mt-2 text-sm'>
      <ul>
        {lastTowns.map((town) => (
          <li
            key={town}
            className='inline pr-2 mr-2 border-r-2 last-town'
          >
            <button
              onClick={(e) => {
                updateTown(town);
              }}
              className='text-blue-700 hover:underline'
            >
              {town}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
