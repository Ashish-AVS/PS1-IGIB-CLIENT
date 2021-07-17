import './Maingrids.css';
import G1 from './G1';
import G2 from './G2';
import G3 from './G3';
import G4 from './G4';
import G5 from './G5';
import G6 from './G6';

const Maingrids = () => {
    return ( 
        <div className="wrap">
          
            <div className="items" id="head">
                <p>Title</p>
            </div>
            <div className="items" id="container">
                <G6/>
            </div>
            <div className="items" id="form">

            </div>
        </div>
     );
}
 
export default Maingrids;