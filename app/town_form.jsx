'use client';

import { useState, useEffect } from 'react';

export default function TownForm({ callback, error }) {
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
        className='mb-4 bg-slate-200 border-2 rounded-none border-l-gray-600'
      >
        <label className=''>
          <input
            name='town'
            value={town}
            onChange={(e) => setTown(e.target.value)}
            className='ml-1 bg-slate-200 hover:bg-gray-100 p-1'
          />
        </label>
        <button
          type='submit'
          className='hover:bg-gray-100 underline p-1 ml-4'
        >
          Search
        </button>
        {error != null && error != '' && (
          <span className='text-red-600 ml-4'>Not found</span>
        )}
      </form>
    </>
  );
}
