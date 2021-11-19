import Oven from "./Oven";
import Sink from "./Sink";
import Fridge from "./Fridge";
import Freezer from "./Freezer";

function Kitchen(props) {
  return (
    <div>
    <h1>Kitchen</h1>
      <div><Oven/></div>
      <div><Sink/></div>
      <div><Fridge
        coldFoods={props.coldFoods}
      /></div>
      <div><Freezer
        frozenFoods={props.frozenFoods}
      /></div>
    </div>
  )
}

export default Kitchen;
