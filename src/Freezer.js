const Freezer = (props) => {
  return ( 
  <div>
    Freezer
    <ul>
      {props.frozenFoods.map((foodItem, idx) =>
        <li key={idx}>{foodItem}</li>
      )}
    </ul>
  </div>
  );
}

export default Freezer;