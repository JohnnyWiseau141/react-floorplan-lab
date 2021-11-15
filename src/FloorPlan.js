import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom'
import Bath from './Bath'


function FloorPlan(props) {
  return (
    <>
    < Bedroom /> 
    < Kitchen />
    < Bath />
    < Bedroom />
    < LivingRoom />
    < Bath />
    < Bedroom />
    </>
  );
}

export default FloorPlan;