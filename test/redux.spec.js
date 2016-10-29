import { assert, expect } from 'chai';

import { default as createStore } from '../app/reduxo';
import { default as createStoreModule, __RewireAPI__ as createStoreRewireAPI } from '../app/reduxo';

describe( '#createStore', () => {

  it( 'should be a function', () => {
    expect( createStore ).to.be.a('function');
  });

  it( 'should throw if reducers is not a function', () => {
    expect( createStore.bind( null, {}, {} ) ).to.throw( TypeError );
    expect( createStore.bind( null, () => {}, {} ) ).to.not.throw();
  });

  it( 'should throw if initial state not an object', () => {
    expect( createStore.bind( null, () => {} , () => {} ) ).to.throw(TypeError);
    expect( createStore.bind( null, () => {} , {} ) ).to.not.throw();
  });

  it( 'should return an object', () => {
    const func = () => {};
    const obj = {};
    const store = createStore( func, obj );
    expect( store ).to.be.an('object');
  });

  describe( 'store', () => {
    const func = () => {};
    const obj = {};
    const store = createStore( func, obj );
    it( 'shold have #subscribe and #dispatch', () => {
      expect( store ).to.have.property( 'subscribe' );
      expect( store ).to.have.property( 'subscribe' );
    });
  });
});

// to test

// const store = createStore( reducers, initialState );

// const unsub = store.subscribe( () => console.log( store.getState() ) );
// store.dispatch({ type: 'greeting' });
// store.dispatch({ type: 'add-device', device: { name: 'FriendPodTouch', manufacturer: 'Apple', mac: 'ayyy' } });
