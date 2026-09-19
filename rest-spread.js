const item = {
  id: 501,
  title: "Wireless Headphones",
  brand: "AudioTech",
  price: 350,
  inStock: true,
};

const processProduct = (product, ...extraCategories) => {
  const { id, price, ...details } = product;

  return {
    ...details,
    discountPrice: price - 100,
    categories: extraCategories,
  };
};

const updatedItem = processProduct(item, "Electronics", "Audio", "Accessories");
console.log("Original Item:", item);
console.log("Updated Item:", updatedItem);
