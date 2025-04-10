// src/lib/store/salesStore.js
import { writable } from 'svelte/store';

// Initializing sales transactions as an empty array
export const salesTransactions = writable([]);

// Function to add a completed sale transaction
export function addSaleTransaction(transaction) {
  salesTransactions.update(currentSales => {
    currentSales.push(transaction);
    return currentSales;
  });
}
