const inventory = [
  { id: 101, item: "Laptop", price: 1000, inStock: true },
  { id: 102, item: "Mouse", price: 25, inStock: true },
  { id: 103, item: "Keyboard", price: 75, inStock: false },
  { id: 104, item: "Monitor", price: 300, inStock: true },
];

const keyboard = inventory.find(({ id }) => id == 103);
const hasExpensiveItem = inventory.some(({ price }) => price > 500);
const allInStock = inventory.every(({ inStock }) => inStock === true);
const totalCost = inventory.reduce((sum, { price }) => sum + price, 0);

const updatedMouse = { ...inventory[1], category: "Tech" };

console.log("Keyboard Item:", keyboard);
console.log("Has Item > $500:", hasExpensiveItem);
console.log("All In Stock:", allInStock);
console.log("Total Inventory Value:", totalCost);
console.log("Updated Mouse:", updatedMouse);
