const employees = [
  {
    id: 1,
    name: "Aarav",
    department: "Engineering",
    rating: 4.8,
    active: true,
  },
  { id: 2, name: "Meera", department: "Marketing", rating: 4.2, active: true },
  {
    id: 3,
    name: "Rohan",
    department: "Engineering",
    rating: 3.9,
    active: true,
  },
  {
    id: 4,
    name: "Priya",
    department: "Engineering",
    rating: 4.6,
    active: false,
  },
  {
    id: 5,
    name: "Karan",
    department: "Engineering",
    rating: 4.5,
    active: true,
  },
];

const topEngineers = employees
  .filter(
    ({ active, department, rating }) =>
      department === "Engineering" && active === true && rating >= 4.5,
  )
  .map(({ name, rating }) => `${name} (${rating}⭐)`);

console.log(topEngineers);
