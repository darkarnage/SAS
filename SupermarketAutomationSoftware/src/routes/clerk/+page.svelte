<script>
    import { SalesClerk } from '$lib/models/SalesClerk.js';
    import { Customer } from '$lib/models/Customer.js';
    import { Item } from '$lib/models/Item.js';
  
    const clerk = new SalesClerk('CL001', 'Clerk One');
    const customer = new Customer('C001', 'Jane Doe');
    const milk = new Item('ITM01', 'Milk', 70, 50, 40);
    const bread = new Item('ITM02', 'Bread', 50, 60, 30);
  
    customer.addToCart(milk, 2);
    customer.addToCart(bread, 1);
  
    const transaction = clerk.processSale(customer.shoppingCart, 'TX001', new Date());
    const bill = transaction.generateBill();
  </script>
  
  <h1>Sales Clerk Page</h1>
  <h2>Transaction</h2>
  <p>ID: {transaction.transactionID}</p>
  <p>Total Amount: {transaction.totalAmount}</p>
  
  <h3>Generated Bill</h3>
  <p>Bill #: {bill.billNumber}</p>
  <ul>
    {#each bill.items as item}
      <li>{item.quantity} x {item.item.name} = {item.quantity * item.item.unitPrice}</li>
    {/each}
  </ul>
  <p>Total: {bill.totalAmount}</p>