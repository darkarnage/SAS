class Bill {
    constructor(transactionID, items, totalAmount) {
      this.billNumber = 'B' + new Date().getTime();
      this.transactionID = transactionID;
      this.items = items;
      this.totalAmount = totalAmount;
    }
  
    printBill() {
      console.log(`Bill #: ${this.billNumber}`);
      this.items.forEach(item => {
        console.log(`${item.quantity} x ${item.item.name} @ ${item.item.unitPrice} = ${item.quantity * item.item.unitPrice}`);
      });
      console.log(`Total Amount: ${this.totalAmount}`);
    }
  }
  
  export { Bill };
  