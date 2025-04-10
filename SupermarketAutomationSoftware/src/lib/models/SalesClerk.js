import { SalesTransaction } from './SalesTransaction.js';

class SalesClerk {
  constructor(clerkID, name) {
    this.clerkID = clerkID;
    this.name = name;
  }

  processSale(cart, transactionID, date) {
    const transaction = new SalesTransaction(transactionID, date, cart);
    return transaction;
  }
}

export { SalesClerk };
