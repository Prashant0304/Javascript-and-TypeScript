const products = [
  {
    id: 101,
    name: "Headphones",
    price: 100,
    category: "Electronics",
    inStock: true,
  },
  { id: 102, name: "Jacket", price: 150, category: "Apparel", inStock: true },
  {
    id: 103,
    name: "Smartphone",
    price: 800,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 104,
    name: "Keyboard",
    price: 200,
    category: "Electronics",
    inStock: true,
  },
];

const discountedElectronics = products
  .filter(
    ({ category, inStock, price }) =>
      category === "Electronics" && inStock === true && price >= 100,
  )
  .map(({ name, price }) => `${name} - Discount Price:$${price * 0.9}`);

console.log(JSON.stringify(discountedElectronics, null, 2));
