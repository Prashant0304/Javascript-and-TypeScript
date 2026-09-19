const getFilteredPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();

    const userTwoLongPosts = result
      .filter(({ userId, title }) => userId === 2 && title.length > 30)
      .map(({ id, title }) => `${id}:${title.toUpperCase()}`);

    console.log("Available Posts:");
    console.log(JSON.stringify(userTwoLongPosts, null, 2));
  } catch (error) {
    console.log("Fetch failed : ", error.message);
  }
};

getFilteredPosts();
