/* @flow */

import {
  STOCK_LOOKUP_BEGIN,
  STOCK_LOOKUP_FAILURE,
  STOCK_LOOKUP_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  lookupResults: {},
};

export function lookup(
  state: Object = initialState,
  action: Object = {}
) {
  let newState;
  switch(action.type) {
    case STOCK_LOOKUP_BEGIN:
      newState = Object.assign({}, state, {isFetching: true});
      if (!state.lookupResults.hasOwnProperty(action.payload.query)) {
        newState.lookupResults[action.payload.query] = null;
      } else {
        console.log(`Already fetching or fetched with query ${action.payload.query}`);
      }
      return newState;
    case STOCK_LOOKUP_FAILURE:
      console.error('Currently not implemented. Treating like noop');
      return Object.assign({}, state, {isFetching: false});
    case STOCK_LOOKUP_SUCCESS:
      newState = Object.assign({}, state, {isFetching: false});
      newState.lookupResults[action.payload.query] = action.payload.results;
      console.log('new state is: ', newState);
      return newState;
    default:
      return state;
  }
}
