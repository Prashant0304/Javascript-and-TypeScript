const inventory = [
  { id: 1, item: "Gaming Laptop", price: 1200, inStock: true },
  { id: 2, item: "Ergonomic Chair", price: 250, inStock: false },
  { id: 3, item: "4K Monitor", price: 450, inStock: true },
  { id: 4, item: "Mechanical Keyboard", price: 80, inStock: true },
  { id: 5, item: "Standing Desk", price: 600, inStock: true },
];

const premiumInStockItems = inventory
  .filter(({ inStock, price }) => inStock && price > 400)
  .map(({ item, price }) => `${item} -$${price}`);

console.log(premiumInStockItems);
