/* @flow */

import RemoteStockInformation from './RemoteStockInformation';

class StockLookupResult {
  /**
   * The query string.
   */
  query: string;

  /**
   * The results.
   */
  results: Array<RemoteStockInformation>;

  constructor(query: string, ...remoteInformations: Array<RemoteStockInformation>) {
    this.query = query;
    this.results = remoteInformations;
  }
}

export default StockLookupResult;
