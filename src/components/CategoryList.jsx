import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
