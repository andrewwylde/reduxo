function createStore( reducer, state = {} ) {

  if ( typeof reducer !== 'function' ) {
    throw new TypeError('reducer must be a function');
  }

  if ( state && typeof state !== 'object' ) {
    throw new TypeError('state must be an object');
  }


  const listeners = new Set();

  function dispatch( action ){

  }

  function subscribe( listener ) {

    listeners.add( listener );

    const unsubscribe = () => {
      listeners.remove( listener );
    };

    return unsubscribe;
  }

  function getState(){
    return state;
  }

  return { dispatch, subscribe, getState };
}



// const store = createStore( reducers, initialState );
// console.log('fuck');
// const unsub = store.subscribe( () => console.log( store.getState() ) );
// store.dispatch({ type: 'greeting' });
// store.dispatch({ type: 'add-device', device: { name: 'FriendPodTouch', manufacturer: 'Apple', mac: 'ayyy' } });
//

export default createStore;