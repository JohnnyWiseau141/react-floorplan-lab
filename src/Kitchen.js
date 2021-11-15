import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <div>
    <h1>Kitchen</h1>
      <div><Oven/></div>
      <div><Sink/></div>
    </div>
  )
}

export default Kitchen;
