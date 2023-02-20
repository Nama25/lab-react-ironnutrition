import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [list, setList] = useState(foods);
  return (
    <div className="App">
    <h2>Food List</h2>

    {list.map((list) => {
      return (
      <div>
      <p>{list.name}</p>
      <img src={list.image} alt="Food" width={120}/>
      </div>
      )
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
