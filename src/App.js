import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [list, setList] = useState(foods);
  const [listAll, setListAll] = useState(foods);

  // Iteration 4 ADD NEW FOOD
  const addNewFood = (newFood) => {
    const updatedList = [...list, newFood];
    const updatedListAll = [...listAll, newFood];

    setList(updatedList);
    setListAll(updatedListAll);
  };

  // Iteration 5 SEARCH BAR >> to do

  // Iteration 6 DELETE
  function deleteFood(name) {
    const filteredFood = list.filter((food) => {
      return food.name !== name;
    });
    setList(filteredFood);
  }

  // Iteration 7 HIDE/ADD Food form >> to do

  // ITeration 8 FEEDBACK Message >> to do



  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      <h2>Food List</h2>

      {list.map((food) => {
        return <FoodBox key={food.name} food={food} clickToDelete={deleteFood}/>;
      })}

     
    </div>
  );
}

export default App;
