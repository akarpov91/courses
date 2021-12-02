// utils/db.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const courses = await prisma.course.findMany({
  include: {
    lessons: true,
  },
})

const getCourses = () =>
  prisma.course.findMany({
    include: {
      lessons: true,
    },
  });

export { getCourses };