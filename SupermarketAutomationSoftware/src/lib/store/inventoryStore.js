// src/lib/store/inventoryStore.js
import { writable } from 'svelte/store';

// Initializing inventory as an empty array
export const inventory = writable([]);

// Function to add an item to the inventory
export function addItemToInventory(item) {
  inventory.update(currentInventory => {
    currentInventory.push(item);
    return currentInventory;
  });
}

// Function to update item quantity in the inventory
export function updateInventoryQuantity(itemCode, quantity) {
  inventory.update(currentInventory => {
    const itemIndex = currentInventory.findIndex(item => item.itemCode === itemCode);
    if (itemIndex !== -1) {
      currentInventory[itemIndex].quantityInStock += quantity;
    }
    return currentInventory;
  });
}
