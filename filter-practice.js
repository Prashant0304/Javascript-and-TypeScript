const developers = [
  { name: "Purushottam", experienceYears: 1 },
  { name: "Prashant", experienceYears: 3 },
  { name: "Rahul", experienceYears: 5 },
  { name: "Ankit", experienceYears: 1 },
];

const seniorDevs = developers.filter(
  ({ experienceYears }) => experienceYears > 1,
);

console.log(JSON.stringify(seniorDevs, null, 2));
