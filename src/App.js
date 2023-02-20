import './App.css';
import foods from './foods.json';
import { useState } from 'react';

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
      
    </div>
  );
}

export default App;
