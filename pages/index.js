import { PrismaClient } from "@prisma/client";

const Index = ({ courses, lessons }) => {
  return (
    <div>
      <h1>Courses</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
      <h1>Lessons</h1>
      <pre>{JSON.stringify(lessons, null, 2)}</pre>
      <h1>Test</h1>
    </div>
  );
};

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const prisma = new PrismaClient()
  const courses = await prisma.course.findMany()
  const lessons = await prisma.lesson.findMany()
  return {
    props: { courses: JSON.parse(JSON.stringify(courses)), lessons: JSON.parse(JSON.stringify(lessons)), }
  }
}

export default Index;