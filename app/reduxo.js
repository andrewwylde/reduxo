function createStore( reducer, state = {} ) {

  if ( typeof reducer !== 'function' ) {
    throw new TypeError('reducer must be a function');
  }

  if ( state && typeof state !== 'object' ) {
    throw new TypeError('state must be an object');
  }

  const listeners = new Set();

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

    return function unsubscribe() {
      listeners.delete( listener );
    };
  }

  function getState(){
    return state;
  }

  return { dispatch, subscribe, getState };
}

export default createStore;