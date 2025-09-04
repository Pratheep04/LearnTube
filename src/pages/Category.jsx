import React from "react";
import { useParams } from "react-router-dom";
import CourseList from "../components/CourseList";

const categoryData = {
  IT: {
    banner: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3UwcXNybGhsd2I4OTJsbXAzZDU5cmhwamlnNHpkY3hodzlwcTcwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/doXBzUFJRxpaUbuaqz/giphy.gif",
    courses: [
      { id: "react", title: "React Basics" },
      { id: "python", title: "Python for Beginners" },
    ],
  },
  Mechanical: {
    banner: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3B6aDZob3J6b2tub2JvYzFqZWgzdnB6cHkxcThncHB4eHIyN2pzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xThuWjtzLJvzMvN7C8/giphy.gif",
    courses: [
      { id: "cad", title: "CAD Design" },
      { id: "solidworks", title: "SolidWorks Tutorial" },
    ],
  },
  Civil: {
    banner: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2dheGdyaDI0aTMzOG9heGpvaXlxdzYwMmxnd3VoZzlwa3Z5dWtqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l43OIxOfy2O1h2X711/giphy.gif",
    courses: [
      { id: "AutoCAD", title: "Drafting" },
      { id: "Revit", title: "Revit Architecture" },
    ],
  },
};

const Category = () => {
  const { name } = useParams();
  const category = categoryData[name];

  if (!category) {
    return <h2>Category not found</h2>;
  }

  return (
    <div className="category-page">
      <div className="category-banner">
        <img src={category.banner} alt={`${name} banner`} />
        <h1>{name} Courses</h1>
      </div>
      <CourseList courses={category.courses} />
    </div>
  );
};

export default Category;
