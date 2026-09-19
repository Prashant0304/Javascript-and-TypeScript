const getCompleteUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    const userOneDoneList = todos
      .filter(({ userId, completed }) => userId === 1 && completed === true)
      .map(({ id, title }) => `${id} : ${title}`);

    console.log("User 1 Completed Tasks:");
    console.log(JSON.stringify(userOneDoneList, null, 2));
  } catch (error) {
    console.log("Fetch failed :", error.message);
  }
};
getCompleteUsers();
