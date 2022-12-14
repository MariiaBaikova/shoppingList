import './App.css';

import { ShoppingList } from './ShoppingList';
import image from './food.jpg'


function App() {
  return (
    
      <div className='App'>
      
        <h1>Grocery List</h1>
        <ShoppingList />
    
      <div className='img'>
        <img src={image} width="250px" alt='food'/>
      </div>
        
      </div>
      
  );
}

export default App;
