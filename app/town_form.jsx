'use client';

import { useState, useEffect } from 'react';

export default function TownForm({ callback }) {
  const [town, setTown] = useState('Enter a town');
  const [send, setSend] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSend(true);
  }

  useEffect(() => {
    if (send == true) {
      callback(town);
    }
    setSend(false);
  }, [send]);

  return (
    <>
      <form
        method='post'
        onSubmit={handleSubmit}
        className='mb-4'
      >
        <label>
          &gt;&nbsp;
          <input
            name='town'
            value={town}
            onChange={(e) => setTown(e.target.value)}
            className='ml-1 hover:bg-gray-100 p-1'
          />
        </label>
        <button
          type='submit'
          className='hover:bg-gray-200 underline p-1'
        >
          Search
        </button>
      </form>
    </>
  );
}
