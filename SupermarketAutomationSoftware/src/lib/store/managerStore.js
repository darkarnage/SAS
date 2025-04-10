// src/lib/store/managerStore.js
import { writable } from 'svelte/store';

// Store for sales statistics (can be updated as needed)
export const salesStatistics = writable([]);

// Function to set sales statistics
export function setSalesStatistics(stats) {
  salesStatistics.set(stats);
}

// Function to update sales statistics
export function updateSalesStatistics(newStat) {
  salesStatistics.update(currentStats => {
    currentStats.push(newStat);
    return currentStats;
  });
}
