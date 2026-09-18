const courses = [
  { id: 1, title: "JavaScript Basics", rating: 4.2, isPublished: true },
  { id: 2, title: "React Fundamentals", rating: 4.8, isPublished: true },
  { id: 3, title: "Advanced TypeScript", rating: 4.9, isPublished: false },
  { id: 4, title: "Next.js Mastery", rating: 4.6, isPublished: true },
];

const topCourses = courses
  .filter(({ isPublished, rating }) => isPublished === true && rating >= 4.5)
  .map(({ title, rating }) => `${title} (${rating}⭐`);

console.log(topCourses);
