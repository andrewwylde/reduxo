import { assert, expect } from 'chai';

import { default as createStore } from '../app/reduxo';
import { default as createStoreModule, __RewireAPI__ as createStoreRewireAPI } from '../app/reduxo';

describe( '#createStore', () => {
  // consts
  const noop = () => {};
  const noobj = {};

  it( 'should be a function', () => {
    expect( createStore ).to.be.a('function');
  });

  it( 'should throw if reducer is not a function', () => {
    expect( createStore.bind( null, noobj, noobj ) ).to.throw( TypeError );
    expect( createStore.bind( null, noop, noobj ) ).to.not.throw();
  });

  it( 'should throw if initial state not an object', () => {
    expect( createStore.bind( null, noop , noop ) ).to.throw(TypeError);
    expect( createStore.bind( null, noop , noobj ) ).to.not.throw();
  });

  it( 'should return an object', () => {
    const store = createStore( noop, noobj );
    expect( store ).to.be.an('object');
  });

  describe( 'store', () => {
    const store = createStore( noop, noobj );

    it( 'shold have #subscribe, #dispatch, getState', () => {
      expect( store ).to.have.property( 'subscribe' );
      expect( store ).to.have.property( 'dispatch' );
      expect( store ).to.have.property( 'getState' );
    });

    describe( '#subscribe', () => {
      it( 'should be a function', () => {
        const store = createStore( noop, noobj );
        expect( store.subscribe ).to.be.a('function');
      });

      it( 'should throw without function', () => {
        const store = createStore( noop, noobj );
        expect( store.subscribe.bind( null, noobj ) ).to.throw();
        expect( store.subscribe.bind( null, noop ) ).to.not.throw();
      });

      it ('should return a function', () => {
        const store = createStore( noop, noobj );
        let unsubscribe = store.subscribe( noop );
        expect( unsubscribe ).to.be.a('function');
      });

      it( 'should not call function after unsubscribe', () => {
        const store = createStore( noop, noobj );
        let called = false;
        const listener = () => {
          called = true;
        }
        let unsub = store.subscribe( listener );
        unsub();
        store.dispatch({});
        expect( called ).to.be.false;

      });

    });

    describe( '#dispatch', () => {
      it( 'should be a function', () => {
        const store = createStore( noop, noobj );

        expect( store.dispatch ).to.be.a('function');
      });

      it( 'should throw without action object', () => {
        const store = createStore( noop, noobj );
        expect( store.dispatch ).to.throw();
        expect( store.dispatch.bind( null, noobj ) ).to.not.throw;
      });

      it( 'should invoke reducers with prevState & action', () => {
        let called = false;
        const reducer = ( prevState, action ) => {
          expect( prevState ).to.be.an('object');
          expect( action ).to.be.an('object');
          called = true;
        }
        const store = createStore( reducer, noobj );
        store.dispatch( noobj );

        expect( called ).to.be.true;

      });

      it( 'should call subscribed function when subscribed', () => {
        const store = createStore( noop, noobj );
        let called = false;
        const listener = () => {
          called = true;
        }
        store.subscribe( listener );
        store.dispatch({});
        expect( called ).to.be.true;
      });

      it( 'should call all subscribed functions when subscribed', () => {
        const store = createStore( noop, noobj );
        let calledOne = false;
        let calledTwo = false;
        const listenerOne = () => {
          calledOne = true;
        }
        const listenerTwo = () => {
          calledTwo = true;
        }
        store.subscribe( listenerOne );
        store.subscribe( listenerTwo );
        store.dispatch({});
        expect( calledOne ).to.be.true;
        expect( calledTwo ).to.be.true;
      });

    });

    describe( '#getState', () => {
      it( 'should be a function', () => {
        const store = createStore( noop, noobj );

        expect( store.getState ).to.be.a('function');
      });
      it( 'should return an object', () => {
        const store = createStore( noop, noobj );
        expect( store.getState() ).to.be.an('object');
      });

      it( 'should return the initial state if nothing has changed', () => {
        const initialState = {
          foo: true
        };
        const store = createStore( noop, initialState );
        expect( store.getState()['foo'] ).to.equal( true );
      });


    });
  });
});