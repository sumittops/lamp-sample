import React, { useEffect, useRef, useState } from 'react';
import { consumeLamp, initializeClient } from 'web-sdk';

const platformId = '625ac3ef3f6501b9179644cc';
const signature =
  'eT5G8XorUe/bn2E2Q1bBTuOiTuQ39cSeQ+YFHTN+gMoMpTmjKSpgKZ1riAJVibUaxPmTWTb8Twq5RWqRK7GxMGCYtH5tnED6RiFW1gf++iHx+aBCInG+0EMPsRai2gdoLgBYbObvYl+ma8WrmlwUKrjvmCoYu/uFkz2OU7veeT+GMJEkISLbLzYml2PDcp+yYzrjGhx9tlZpkYd/E1CYTOaJ+zMyVj1FJeocWaJWnlqte+zhh06MRjVSU7Xdd1hWYI2jVnhmN4SZLDtNpnnzSGeuJW9g2txduLamyfzd30FEVBuBOfpUSVCiYD1AEAkuiTxlNQncSsGKnxqvLO5t7g==';

function App() {
  const mountTarget = useRef();
  const lampInitialized = useRef(false);
  const [donutInit, setDonutInit] = useState(false);

  useEffect(() => {
    initializeClient({
      platformId,
      signature,
      role: 'learner',
      refId: 'learner1_ref_id'
    })
      .then(() => {
        lampInitialized.current = true;
        console.log('lampInitialized', lampInitialized.current);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const startDonut = () => {
    if (lampInitialized.current) {
      if (mountTarget && mountTarget.current) {
        mountTarget.current.innerHTML = '';
      }
      consumeLamp({
        type: 'donut',
        metaData: {
          recorded: true
        },
        target: mountTarget.current
      });
      setDonutInit(true);
    } else {
      window.alert('Lamp not initialized');
    }
  };

  // const onSubmit = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     consumeDonut({
  //       userId: name,
  //       role: 'learner'
  //     });
  //     setName('');
  //   },
  //   [name]
  // );

  return (
    <div className="h-screen flex">
      <div className={`w-56 bg-yellow-400 py-12 px-4 ${donutInit ? 'hidden' : ''}`}>
        <button
          className="px-6 py-3 cursor-pointer bg-gray-300 hover:bg-gray-50 text-lg"
          onClick={startDonut}>
          Start Donut
        </button>
      </div>
      <div className="h-full w-full" ref={mountTarget} />
      {/* <form onSubmit={onSubmit}>
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
      </form> */}
    </div>
  );
}

export default App;
