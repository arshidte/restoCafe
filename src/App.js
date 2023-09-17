import { useEffect, useState } from "react";
import CategoryList from "./Components/CategoryList";
import DishesList from "./Components/DishesList";
import Header from "./Components/Header";
import { fetchDishesByCategory } from './apis';

function App() {

  const [selectedCat, setSelectedCat] = useState(11);
  const [dishes, setDishes] = useState([]);

  const [count, setCount] = useState({});

  // Function to load dishes and it is passed to CategoryList as prop to get category ID.
  const loadDishesByCategory = async (categoryId) => {
    try {
      const data = await fetchDishesByCategory(categoryId);
      setDishes(data);
      setSelectedCat(categoryId);
    } catch (error) {
      console.error("Error loading dishes: ", error);
    }
  };

  return (
    <div>
      <Header count={count}/>
      <CategoryList onCategorySelect={loadDishesByCategory} />
      {selectedCat && <DishesList dishes={dishes} count={count} setCount={setCount} />}
    </div>
  );
}

export default App;
