import { assert, expect } from 'chai';


import { default as ReduxoModule } from '../app/index.js';
import { default as Reduxo, __RewireAPI__ as ReduxoModuleRewireAPI } from '../app/index.js';

describe('module default export test', function() {

    it('should be an object', () => {
        expect( typeof Reduxo ).to.equal('object');
    });

    it( 'should have createStore method', () => {
        expect( Reduxo.createStore ).to.be.ok;
        assert.isFunction( Reduxo.createStore );
    })
});

// to test

// const store = createStore( reducers, initialState );

// const unsub = store.subscribe( () => console.log( store.getState() ) );
// store.dispatch({ type: 'greeting' });
// store.dispatch({ type: 'add-device', device: { name: 'FriendPodTouch', manufacturer: 'Apple', mac: 'ayyy' } });
