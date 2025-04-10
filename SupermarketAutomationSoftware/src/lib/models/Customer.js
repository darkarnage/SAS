class Customer {
    constructor(customerID, name) {
      this.customerID = customerID;
      this.name = name;
      this.shoppingCart = [];
    }
  
    addToCart(item, quantity) {
      const cartItem = { item, quantity };
      this.shoppingCart.push(cartItem);
    }
  }
  
  export { Customer };
  