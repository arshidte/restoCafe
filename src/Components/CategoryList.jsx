import React, { useState, useEffect } from "react";
import { fetchCategories } from "../apis";

const CategoryList = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Function to load categories
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data[0].table_menu_list);

        setSelectedCategory(data[0].table_menu_list.menu_category_id);

        // For showing the first list initially
        onCategorySelect(data[0].table_menu_list[0].menu_category_id);
      } catch (error) {
        console.error("Error loading categories: ", error);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="category-list-container">
      <div className="category-list">
        {categories &&
          categories.map((category) => (
            <div
              className={
                selectedCategory === category.menu_category_id
                  ? "category selectedCat"
                  : "category"
              }
              key={category.menu_category_id}
              onClick={() => {
                onCategorySelect(category.menu_category_id);
                setSelectedCategory(category.menu_category_id);
              }}
            >
              {category.menu_category}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
