import { assert } from 'chai';
import reduxo from '../app/index';
import { app, __RewireAPI__ as appModuleRewireAPI } from '../app/index';

describe('module default export test', function() {
   it('should demonstrate the default exported rewire api', function() {
      expect( app() ).to.equal('Hello world');
      FooModule.__Rewire__('message', function() {
         return 'my message';
      });
      expect( foo() ).to.equal('my message');
      FooModule.__ResetDependency__('message');
   });

   it('should demonstrate the rewire apis named export', function() {
      expect( foo() ).to.equal('Hello world');
      FooModuleRewireAPI.__Rewire__('message', function() {
         return 'my message';
      });
      expect( foo() ).to.equal('my message');
      FooModuleRewireAPI.__ResetDependency__('message');
   });
});

describe( '#app', () => {

    describe( 'base', () => {
        it( 'should be an object', () => {
            assert.equal( typeof app, 'function' );
            assert.isOk(true, 'innerIndex should be thing');
        });

        describe( 'createStore', () => {
            it('should be a function', () => {
                assert.isFunction( )
            });
        });
        
        describe( 'store', () => {
            describe( '#subscribe()', () => {});  

            describe( '#dispatch()', () => {});  

        })
        
    })



})

// to test

// const store = createStore( reducers, initialState );

// const unsub = store.subscribe( () => console.log( store.getState() ) );
// store.dispatch({ type: 'greeting' });
// store.dispatch({ type: 'add-device', device: { name: 'FriendPodTouch', manufacturer: 'Apple', mac: 'ayyy' } });