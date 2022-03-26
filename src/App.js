import React, { useCallback, useEffect, useState } from 'react';
import { consumeDonut, initializeApp } from 'web-sdk';

function App() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('learner');

  const handleSetName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  useEffect(() => {
    initializeApp({
      accessKey: 'sample_access_key',
      clientId: '622c74a2a3d36035c13c564f',
      additional: {
        refId: 'fake_ref',
        role: 'learner'
      }
    });
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      consumeDonut({
        userId: name,
        role: 'learner'
      });
      setName('');
    },
    [name]
  );

  return (
    <div className="h-screen px-8 py-12">
      <h3 className="text-2xl">Welcome to Lamp Demo Site</h3>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col p-12 shadow-md rounded-md w-96">
          <input
            type="text"
            className="text-lg h-8 px-2 border-2 rounded-md"
            onChange={handleSetName}
            placeholder="Your name"
            value={name}
          />
          <br />
          <select
            className="h-8 border-2 rounded-md px-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}>
            <option value="learner">Learner</option>
            <option value="instructor">Instructor</option>
          </select>
          <br />
          <button type="submit" className="bg-zinc-600 px-4 py-1 border-2 rounded-md">
            Get Donut
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
