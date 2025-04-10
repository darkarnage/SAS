import { Supermarket } from './Supermarket.js';
import { SalesStatistics } from './SalesStatistics.js';

class Manager {
  constructor(managerID, name) {
    this.managerID = managerID;
    this.name = name;
  }

  viewInventory(supermarket) {
    return supermarket.inventory;
  }

  updateItemPrice(item, newPrice) {
    item.unitPrice = newPrice;
  }

  viewSalesStatistics(supermarket) {
    return supermarket.salesTransactions.map(transaction => {
      return transaction.itemsSold.map(cartItem => {
        return new SalesStatistics(cartItem.item, cartItem.quantity, cartItem.item.unitPrice * cartItem.quantity, cartItem.item.unitPrice * cartItem.quantity - cartItem.item.costPrice * cartItem.quantity);
      });
    }).flat();
  }
}

export { Manager };
