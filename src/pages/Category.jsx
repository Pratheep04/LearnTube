import React from "react";
import { useParams } from "react-router-dom";
import CourseList from "../components/CourseList";

const courses = {
  IT: [
    { id: "react", title: "React Basics" },
    { id: "python", title: "Python for Beginners" },
  ],
  Mechanical: [
    { id: "cad", title: "CAD Design" },
    { id: "solidworks", title: "SolidWorks Tutorial" },
  ],
  Civil: [
    { id: "AutoCAD", title: "Drafting" },
    { id: "Revit", title: "Revit Architecture" },
  ],
};

const Category = () => {
  const { name } = useParams();
  const categoryCourses = courses[name] || [];

  return (
    <div>
      <h1>{name} Courses</h1>
      <CourseList courses={categoryCourses} />
    </div>
  );
};

export default Category;
