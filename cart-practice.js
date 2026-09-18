const cartItems = [
  { id: 101, title: "Wireless Mouse", price: 25, inCart: true },
  { id: 102, title: "Mechanical Keyboard", price: 90, inCart: false },
  { id: 103, title: "USB-C Cable", price: 15, inCart: true },
  { id: 104, title: "Monitor Arm", price: 60, inCart: false },
];

const activeCartSummary = cartItems
  .filter(({ inCart }) => inCart === true)
  .map(({ title, price }) => `${title} -$${price}`);

console.log(JSON.stringify(activeCartSummary));
