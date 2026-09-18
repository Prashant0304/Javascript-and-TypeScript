const createJobOffer = (title, salary) => {
  return { title, salary, status: "Active" };
};

const offer = createJobOffer("Frontend Engineer", 60000);
console.log(offer);
