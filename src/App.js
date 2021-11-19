import './App.css';
import FloorPlan from './FloorPlan';


function App() {
  const coldFoods = ["Jello", "Sugar Cookies", "Watermelon", "Cabbage", "Jelly beans", "Tofu", "Cotton Candy Grapes", "Chorizo"]
  const frozenFoods = ["Pizza time", "Hot Pockets", "Popsicles"]
  return (
    <div>
    <FloorPlan 
    coldFoods={coldFoods}
    frozenFoods={frozenFoods}
    />
    </div>
  );
}

export default App;