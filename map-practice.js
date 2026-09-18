const developers = [
  { name: "Purushottam", skill: "JavaScript" },
  { name: "Prashant", skill: "React" },
  { name: "Rahul", skill: "Node.js" },
];

const skillSummaries = developers.map(
  ({ name, skill }) => `${name} specializes in ${skill}`,
);
console.log(skillSummaries);
