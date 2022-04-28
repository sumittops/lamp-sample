import React, { useEffect, useRef, useState } from 'react';
import { consumeLamp, initializeClient } from 'web-sdk';
import Header from './Header';

const platformId = '625ac3ef3f6501b9179644cc';
const signature =
  'eT5G8XorUe/bn2E2Q1bBTuOiTuQ39cSeQ+YFHTN+gMoMpTmjKSpgKZ1riAJVibUaxPmTWTb8Twq5RWqRK7GxMGCYtH5tnED6RiFW1gf++iHx+aBCInG+0EMPsRai2gdoLgBYbObvYl+ma8WrmlwUKrjvmCoYu/uFkz2OU7veeT+GMJEkISLbLzYml2PDcp+yYzrjGhx9tlZpkYd/E1CYTOaJ+zMyVj1FJeocWaJWnlqte+zhh06MRjVSU7Xdd1hWYI2jVnhmN4SZLDtNpnnzSGeuJW9g2txduLamyfzd30FEVBuBOfpUSVCiYD1AEAkuiTxlNQncSsGKnxqvLO5t7g==';

function App() {
  const mountTarget = useRef();
  const unmountRef = useRef();
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

  const deleteDonut = () => {
    if (unmountRef.current) {
      unmountRef.current();
      setDonutInit(false);
    }
  };

  const startDonut = () => {
    if (lampInitialized.current) {
      if (mountTarget && mountTarget.current) {
        mountTarget.current.innerHTML = '';
      }
      unmountRef.current = consumeLamp({
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
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex flex-1">
        <div className={`w-56 bg-orange-50 py-12 px-4 ${donutInit ? 'hidden' : ''}`}>
          <button
            className="px-6 py-3 cursor-pointer bg-gray-300 hover:bg-gray-50 text-lg"
            onClick={startDonut}>
            Start Donut
          </button>
        </div>
        <div className="h-full w-full flex flex-col">
          <div className="p-2">
            <div className={`w-32 ${donutInit ? '' : 'hidden'}`}>
              <button
                className="px-6 py-3 cursor-pointer bg-gray-300 hover:bg-gray-50 text-lg"
                onClick={deleteDonut}>
                Close
              </button>
            </div>
          </div>
          <div className="h-full w-full p-2">
            <div id="mount-donut" className="h-full shadow-2xl rounded-lg" ref={mountTarget} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
