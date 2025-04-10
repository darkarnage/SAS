class Supermarket {
    constructor(name, address) {
      this.name = name;
      this.address = address;
      this.inventory = [];
      this.salesTransactions = [];
    }
  
    addItem(item) {
      this.inventory.push(item);
    }
  }
  
  export { Supermarket };
  