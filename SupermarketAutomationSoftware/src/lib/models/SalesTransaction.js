import { Bill } from './Bill.js';

class SalesTransaction {
  constructor(transactionID, date, itemsSold) {
    this.transactionID = transactionID;
    this.date = date;
    this.itemsSold = itemsSold;
    this.totalAmount = this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    return this.itemsSold.reduce((total, cartItem) => {
      return total + cartItem.item.unitPrice * cartItem.quantity;
    }, 0);
  }

  generateBill() {
    return new Bill(this.transactionID, this.itemsSold, this.totalAmount);
  }
}

export { SalesTransaction };
