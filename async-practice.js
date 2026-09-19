const getTodo = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();

    const { title, completed } = data;

    console.log(`Todo Title : ${title}`);
    console.log(`Is Completed : ${completed}`);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
};

getTodo();
