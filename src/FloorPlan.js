import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom'
import Bath from './Bath'


function FloorPlan(props) {
  return (
    <div>
    < Bedroom bedNum={2} /> 
    < Kitchen />
    < Bath />
    < Bedroom bedNum={1} />
    < LivingRoom />
    < Bath />
    < Bedroom bedNum={3} />
    </div>
  );
}

export default FloorPlan;