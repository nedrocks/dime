/* @flow */

class PurchaseInfo {
  /**
   * Unique ID for this purchase.
   *
   * @type {number}
   */
  id: number;

  /**
   * Stock symbol.
   *
   * @type {string}
   */
  symbol: string;

  /**
   * Purchase price. Must be in cents.
   */
  purchasePriceCents: number;

  constructor(id: number, symbol: string, purchasePriceCents: number) {
    this.id = id;
    this.symbol = symbol;
    this.purchasePriceCents = purchasePriceCents;
  }
}

export default PurchaseInfo;
