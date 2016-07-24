/* @flow */

import RemoteStockInformation from '../models/RemoteStockInformation';
import StockLookupResult from '../models/StockLookupResult';

class RemoteStockManager {
  getStockInformation: Function = (quote: string): Promise<RemoteStockInformation> => {
    return new Promise((resolve: Function, reject: Function) => {
      resolve(new RemoteStockInformation('YHOO'))
    });
  }

  lookupStock: Function = (query: string): Promise<StockLookupResult> => {
    return new Promise((resolve: Function, reject: Function) => {
      setTimeout(() => {
        resolve(new StockLookupResult(
          query,
          new RemoteStockInformation('YHOO'),
          new RemoteStockInformation('GOOG'),
          new RemoteStockInformation('FB'),
        ));
      }, 200);
    });
  }
}

export default RemoteStockManager;
