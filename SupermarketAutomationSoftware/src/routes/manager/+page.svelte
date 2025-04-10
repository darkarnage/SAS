<script>
    import { Manager } from '$lib/models/Manager.js';
    import { Supermarket } from '$lib/models/Supermarket.js';
    import { Item } from '$lib/models/Item.js';
  
    const market = new Supermarket('Quickmart', '123 Main St');
    const manager = new Manager('MGR001', 'Manager One');
  
    const item1 = new Item('I001', 'Sugar', 100, 20, 60);
    const item2 = new Item('I002', 'Salt', 40, 100, 10);
  
    market.addItem(item1);
    market.addItem(item2);
    const inventory = manager.viewInventory(market);
  
    const stats = manager.viewSalesStatistics({
      salesTransactions: [
        {
          itemsSold: [
            { item: item1, quantity: 3 },
            { item: item2, quantity: 5 }
          ]
        }
      ]
    });
  </script>
  
  <h1>Manager Dashboard</h1>
  <h2>Inventory</h2>
  <ul>
    {#each inventory as item}
      <li>{item.name}: KES {item.unitPrice} ({item.quantityInStock} in stock)</li>
    {/each}
  </ul>
  
  <h2>Sales Statistics</h2>
  <ul>
    {#each stats as s}
      <li>{s.item.name}: Sold {s.quantitySold}, Revenue: KES {s.totalRevenue}, Profit: KES {s.profit}</li>
    {/each}
  </ul>
  