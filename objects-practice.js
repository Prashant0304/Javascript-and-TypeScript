const developer = {
  name: "Purushottam",
  primarySkills: "JavaScript",
  experienceYears: 1,
};

const getDevSummmary = (devObj) => {
  return `${devObj.name} has ${devObj.experienceYears} year of experience in ${devObj.primarySkills}`;
};

const summery = getDevSummmary(developer);
console.log(summery);
