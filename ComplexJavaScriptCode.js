/* 
   Filename: ComplexJavaScriptCode.js
   Content: A complex and sophisticated JavaScript code demonstrating a full-featured online shopping cart system.
*/

// Define the Item class for shopping cart items
class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  subtotal() {
    return this.price * this.quantity;
  }
}

// Define the ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = [];  // Array to store items in the shopping cart
  }
  
  // Add an item to the cart
  addItem(item) {
    this.items.push(item);
  }
  
  // Remove an item from the cart
  removeItem(itemName) {
    const index = this.items.findIndex(item => item.name === itemName);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
  // Get the total price of all items in the cart
  totalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.subtotal();
    }
    return total;
  }
  
  // Get the number of items in the cart
  itemCount() {
    return this.items.length;
  }
  
  // Clear all items from the cart
  clearCart() {
    this.items = [];
  }
}

// Test the shopping cart functionality
const cart = new ShoppingCart();
const item1 = new Item("Laptop", 999.99, 1);
const item2 = new Item("Mouse", 19.99, 2);
const item3 = new Item("Keyboard", 49.99, 1);

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

console.log("Number of items in the cart: " + cart.itemCount());
console.log("Total price of items in the cart: $" + cart.totalPrice());

cart.removeItem("Mouse");

console.log("Number of items in the cart after removal: " + cart.itemCount());
console.log("Total price of items in the cart after removal: $" + cart.totalPrice());

cart.clearCart();

console.log("Number of items in the cart after clearance: " + cart.itemCount());
console.log("Total price of items in the cart after clearance: $" + cart.totalPrice());

// ... More complex code can be added here ...
// ... The code can include various features such as user authentication, payment processing, order history, etc. ...

// End of code