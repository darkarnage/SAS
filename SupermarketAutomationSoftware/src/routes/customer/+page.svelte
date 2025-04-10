<script>
    import { Customer } from '$lib/models/Customer.js';
    import { Item } from '$lib/models/Item.js';
  
    const customer = new Customer('C001', 'Jane Doe');
    const milk = new Item('ITM01', 'Milk', 70, 50, 40);
    const bread = new Item('ITM02', 'Bread', 50, 60, 30);
  
    customer.addToCart(milk, 2);
    customer.addToCart(bread, 1);
  </script>
  
  <h1>Customer Page</h1>
  <h2>Shopping Cart</h2>
  <ul>
    {#each customer.shoppingCart as cartItem}
      <li>{cartItem.quantity} x {cartItem.item.name} @ {cartItem.item.unitPrice} = {cartItem.quantity * cartItem.item.unitPrice}</li>
    {/each}
  </ul>