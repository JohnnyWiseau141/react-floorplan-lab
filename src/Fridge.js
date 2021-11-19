const Fridge = (props) => {
  return ( 
  <div>
    Fridge
    <ul>
      {props.coldFoods.map((foodItem, idx) => 
        <li key={idx}>{foodItem}</li>  
      )}
    </ul>
  </div>
  );
}

export default Fridge;