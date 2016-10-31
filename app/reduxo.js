function createStore( reducer, state = {} ) {

  if ( typeof reducer !== 'function' ) {
    throw new TypeError('reducer must be a function');
  }

  if ( state && typeof state !== 'object' ) {
    throw new TypeError('state must be an object');
  }


  const listeners = new Set();
//
  // function executeListener ( listener ){
    // listener();
  // }

  function dispatch( action ){
    if ( typeof action !== 'object' ) {
      throw new TypeError('action must be an object');
    }
    reducer( state, action );

    listeners.forEach( listener => {
      listener();
    } );
  }

  function subscribe( listener ) {
    if ( typeof listener !== 'function' ) {
      throw new TypeError('listener must be a function');
    }

    listeners.add( listener );

    return () => {};
    //
    // const unsubscribe = () => {
    //   listeners.remove( listener );
    // };
    //
    // return unsubscribe;
  }

  function getState(){
    return state;
  }

  return { dispatch, subscribe, getState };
}



// const store = createStore( reducers, initialState );
// const unsub = store.subscribe( () => console.log( store.getState() ) );
// store.dispatch({ type: 'greeting' });
// store.dispatch({ type: 'add-device', device: { name: 'FriendPodTouch', manufacturer: 'Apple', mac: 'ayyy' } });
//

export default createStore;