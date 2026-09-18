const courseData = {
  id: 101,
  info: {
    title: "Next.js Fundamentals",
    author: "Purushottam",
  },
};

const getCourseTitle = (data) => {
  const {
    info: { title },
  } = data;
  return title;
};

const title = getCourseTitle(courseData);
console.log(title);
