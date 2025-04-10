// src/lib/store/cartStore.js
import { writable } from 'svelte/store';

// Initializing the shopping cart as an empty array
export const cart = writable([]);

// Function to add item to cart
export function addToCart(item, quantity) {
  cart.update(currentCart => {
    const existingItemIndex = currentCart.findIndex(cartItem => cartItem.item.itemCode === item.itemCode);
    if (existingItemIndex !== -1) {
      currentCart[existingItemIndex].quantity += quantity;
    } else {
      currentCart.push({ item, quantity });
    }
    return currentCart;
  });
}

// Function to remove item from cart
export function removeFromCart(itemCode) {
  cart.update(currentCart => {
    return currentCart.filter(cartItem => cartItem.item.itemCode !== itemCode);
  });
}

// Function to clear the cart
export function clearCart() {
  cart.set([]);
}
