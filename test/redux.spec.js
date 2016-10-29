import { assert, expect } from 'chai';

import { default as ReduxoModule } from '../app/reduxo';
import { default as Reduxo, __RewireAPI__ as ReduxoModuleRewireAPI } from '../app/reduxo';

describe('Reduxo class', () => {

    it('should be an object', () => {
        expect( typeof ReduxoModule ).to.equal('object');
    })

    it( 'should have createStore method', () => {
        expect( ReduxoModule ).to.have.property('createStore');
    });

    describe( '#createStore', () => {
      it( 'should be a function', () => {
        expect( ReduxoModule.createStore ).to.be.a('function');
      });

      it( 'should throw if reducers is not a function', () => {
        const func = () => {};
        expect( ReduxoModule.createStore.bind( null, {} ) ).to.throw( TypeError );
        expect( ReduxoModule.createStore.bind( null, func ) ).to.not.throw();
      });

      it( 'should throw if initial state not an object', () => {
        const func = () => {};
        expect( ReduxoModule.createStore.bind( null, func, func ) ).to.throw(TypeError);
        expect( ReduxoModule.createStore.bind( null, func, {} ) ).to.not.throw();
      });

      it( 'should return an object', () => {
        const func = () => {};
        const obj = {};
        const store = ReduxoModule.createStore( func, obj );
        expect( store ).to.be.an('object')
      });

      describe( 'store', () => {
        it( 'description', () => {

        });
      });
    });
});

// to test

// const store = createStore( reducers, initialState );

// const unsub = store.subscribe( () => console.log( store.getState() ) );
// store.dispatch({ type: 'greeting' });
// store.dispatch({ type: 'add-device', device: { name: 'FriendPodTouch', manufacturer: 'Apple', mac: 'ayyy' } });
