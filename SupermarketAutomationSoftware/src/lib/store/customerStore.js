// src/lib/store/customerStore.js
import { writable } from 'svelte/store';

// Store the current logged-in customer
export const currentCustomer = writable(null);

// Function to set the customer session
export function setCustomerSession(customer) {
  currentCustomer.set(customer);
}

// Function to clear the customer session (logout)
export function clearCustomerSession() {
  currentCustomer.set(null);
}
