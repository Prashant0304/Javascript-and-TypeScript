const developer = {
  name: "Purushottam",
  primarySkills: "JavaScript",
  experienceYears: 1,
};

const getDevSummaryDestructured = ({
  name,
  primarySkills,
  experienceYears,
}) => {
  console.log(
    `${name}  has ${experienceYears} year of experience in ${primarySkills}`,
  );
};

getDevSummaryDestructured(developer);
