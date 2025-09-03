import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  return (
    <div className="course-list">
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
