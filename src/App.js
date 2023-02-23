import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [list, setList] = useState(foods);
  const [listAll, setListAll] = useState();

  // Iteration 4 ADD NEW FOOD
  const addNewFood = (newFood) => {
    const updatedList = [...list, newFood];
    const updatedListAll = [...listAll, newFood];

    setList(updatedList);
    setListAll(updatedListAll);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      <h2>Food List</h2>

      {list.map((food) => {
        return <FoodBox key={food.id} food={food} />;
      })}

     
    </div>
  );
}

export default App;
