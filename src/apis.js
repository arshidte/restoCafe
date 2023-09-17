// api.js
const API_BASE_URL = "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchDishesByCategory = async (categoryId) => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    const data = await response.json();

    const res = data[0].table_menu_list.filter(menu => menu.menu_category_id === categoryId).map(dish => dish.category_dishes);
    return res;

  } catch (error) {
    throw error;
  }
};