const employees = [
  { id: 1, name: "John", department: "IT", salary: 70000, active: true },
  { id: 2, name: "Sarah", department: "HR", salary: 50000, active: false },
  { id: 3, name: "David", department: "IT", salary: 80000, active: true },
  { id: 4, name: "Meena", department: "Finance", salary: 60000, active: true },
  { id: 5, name: "Alex", department: "HR", salary: 45000, active: false },
];

const highestSalary = employees
  .filter(({ department, salary }) => department === "IT" && salary > 70000)
  .map(
    ({ name, department }) =>
      `${name} is getting highest salary in ${department}`,
  );

console.log(JSON.stringify(highestSalary));
