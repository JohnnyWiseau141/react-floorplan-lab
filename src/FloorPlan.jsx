import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom'
import Bath from './Bath'


function FloorPlan(props) {
  
  return (
    <div>
    < Bedroom bedNum={2} /> 
    < Kitchen 
      coldFoods={props.coldFoods}
      frozenFoods={props.frozenFoods}
    />
    < Bath size={"Full"} />
    < Bedroom bedNum={1} />
    < LivingRoom />
    < Bath size={"Half"} />
    < Bedroom bedNum={3} />
    </div>
  );
}

export default FloorPlan;