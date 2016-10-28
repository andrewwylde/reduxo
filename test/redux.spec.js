import { assert, expect } from 'chai';


import { default as ReduxoModule } from '../app/index.js';
import { default as Reduxo, __RewireAPI__ as ReduxoModuleRewireAPI } from '../app/index.js';

describe('module default export test', function() {
   it('should demonstrate the default exported rewire api', function() {
      expect( Reduxo() ).to.equal('fart');
      ReduxoModule.__Rewire__('fart', function() {
         return 'my message';
      });
      expect( Reduxo() ).to.equal('my message');
      ReduxoModule.__ResetDependency__('fart');
   });

   it('should demonstrate the rewire apis named export', function() {
      expect( Reduxo() ).to.equal('fart');
      ReduxoModuleRewireAPI.__Rewire__('fart', function() {
         return 'my message';
      });
      expect( Reduxo() ).to.equal('my message');
      ReduxoModuleRewireAPI.__ResetDependency__('fart');
   });
});

// to test

// const store = createStore( reducers, initialState );

// const unsub = store.subscribe( () => console.log( store.getState() ) );
// store.dispatch({ type: 'greeting' });
// store.dispatch({ type: 'add-device', device: { name: 'FriendPodTouch', manufacturer: 'Apple', mac: 'ayyy' } });
