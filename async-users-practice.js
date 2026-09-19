const getSpecialUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();

    const cityUserSummary = result
      .filter(
        ({ id, username }) =>
          id % 2 === 0 &&
          (username.startsWith("A") || username.startsWith("L")),
      )
      .map(
        ({ name, username, email }) =>
          `${name} (@${username}) - Email:${email}`,
      );

    console.log(JSON.stringify(cityUserSummary, null, 2));
  } catch (error) {
    console.log("Fetch failed : ", error.message);
  }
};

getSpecialUsers();
