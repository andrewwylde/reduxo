class Reduxo {

    createStore( reducer, initialState ) {
      if ( typeof reducer !== 'function' ) {
        throw new TypeError('reducer should be a function');
      }

      if ( initialState && typeof initialState !== 'object' ) {
        throw new TypeError('initialState must be an object');
      }

      return {};
    }

}

export default new Reduxo();