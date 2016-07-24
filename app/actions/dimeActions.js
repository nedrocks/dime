/* @flow */

import {
  STOCK_BATCH_LOAD_BEGIN,
  STOCK_BATCH_LOAD_SUCCESS,
  STOCK_BATCH_LOAD_FAILURE,

  STOCK_LOOKUP_BEGIN,
  STOCK_LOOKUP_FAILURE,
  STOCK_LOOKUP_SUCCESS,

  STOCK_PURCHASE_CREATE,
  STOCK_PURCHASE_DELETE,
  STOCK_PURCHASE_UPDATE,

  STOCK_REMOTE_UPDATE_BEGIN,
  STOCK_REMOTE_UPDATE_FAILURE,
  STOCK_REMOTE_UPDATE_SUCCESS
} from './actionTypes';

import PurchaseInfo from '../models/PurchaseInfo';
import StockLookupResult from '../models/StockLookupResult';

import { remoteStockManager } from '../services';

/**
 * An action to notify the system we've started a lookup for a stock with the
 * provided symbol.
 *
 * @param {string} symbol The string we're looking up.
 * @returns {Action} Stock lookup begin action.
 */
export function beginStockLookup(symbol: string) {
  return {
    type: STOCK_LOOKUP_BEGIN,
    payload: {
      query: symbol,
    },
    meta: {},
    isError: false,
  }
}

/**
 * A stock lookup success action.
 *
 * @param {StockLookupResult} stockLookupResult The stock lookup result.
 * @returns {Action} The stock lookup success action.
 */
export function stockLookupSuccess(stockLookupResult: StockLookupResult) {
  return {
    type: STOCK_LOOKUP_SUCCESS,
    payload: {
      query: stockLookupResult.query,
      results: stockLookupResult.results,
    },
    meta: {},
    isError: false,
  };
}

/**
 * Looks up a stock from a symbol. This is asynchronous and will fire a
 * stockLookupResult action after completing the lookup.
 *
 * @param {string} symbol The Symbol to lookup.
 * @returns {Function} A thunk for dispatching the action.
 */
export function lookupStock(symbol: string) {
  return function(dispatch: Function) {
    dispatch(beginStockLookup(symbol));

    remoteStockManager.lookupStock(symbol)
      .then(result => {
        dispatch(stockLookupSuccess(result));
      });
  }
}

// export function creatingStockPurchase(purchaseInfo: PurchaseInfo) {
//
// }
//
// export function stockPurchaseCreate(purchaseInfo: PurchaseInfo) {
//   return function(dispatch: Function) {
//     dispatch()
//   }
// };
