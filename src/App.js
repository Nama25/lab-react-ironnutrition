import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [list, setList] = useState(foods);
  return (
    <div className="App">
    <h2>Food List</h2>

   
      {list.map(food => {
        return <FoodBox key={food.id} food={food}/>
      })}
  

 <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> 
      
    </div>
  );
}

export default App;
