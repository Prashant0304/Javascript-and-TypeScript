// const user = { name: "Purushottam", theme: "dark" };

// localStorage.setItem("user_Settings", JSON.stringify(user));

// const saveData = localStorage.getItem("user_Settings");

// const parseUser = JSON.parse(saveData);

const userProfile = { id: 1, name: "Purushottam", theme: "dark" };

const handleStorageSim = (profile) => {
  const jsonString = JSON.stringify(profile);

  const parsedProfile = JSON.parse(jsonString);
  return parsedProfile;
};

console.log(handleStorageSim(userProfile));
