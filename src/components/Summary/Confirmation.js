import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './table.css';


const Summary = ({displayData}) => {
    
    console.log(displayData)

    return ( 
    <>
    { displayData && (
    <>
    <div className="details">
        {/* <h3>Paitent name :  {data.patients[data.patients.length -1].PatientName}</h3>
        <h3>Age of the paitient : {data.patients[data.patients.length -1].Age} </h3>
        <h3>Scorer Name: {data.patients[data.patients.length -1].ScorerName}</h3> 
        <h3>Gender : {data.patients[data.patients.length -1].Gender}</h3>
        <h3>Date Of Birth :{data.patients[data.patients.length -1].DateOfBirth}</h3>
        <h3>Date Of Scoring :{data.patients[data.patients.length -1].DateOfScorer}</h3> */}
    </div>
    <table>
        <thead>
            <tr>
                <th>Clinical Feature</th>
                <th>Phenotype</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Distribution of Lesions</td>
                <td></td>
            </tr>
            <tr>
                <td>Excess Granulationh</td>
                <td></td>
            </tr>
            <tr>
                <td>Scarring</td>
                <td></td>
            </tr>
            <tr>
                <td>Milia</td>
                <td></td>
            </tr>
            <tr>
                <td>Nail Dystrophy</td>
                <td></td>
            </tr>
            <tr>
                <td>Nail loss</td>
                <td></td>
            </tr>
            <tr>
                <td>Mucosal_erosions</td>
                <td></td>
            </tr>
            <tr>
                <td>Eye Involvement</td>
                <td></td>
            </tr>
            <tr>
                <td>Eye Involvement</td>
                <td></td>
            </tr>
            <tr>
                <td>Involvement of Respiratory tact</td>
                <td></td>
            </tr>
            <tr>
                <td>Microstomia/Ankyloglossia</td>
                <td></td>
            </tr>
            <tr>
                <td>Dental Enamel</td>
                <td></td>
            </tr>
            <tr>
                <td>Palmoplantar Keratoderma</td>
                <td></td>
            </tr>
            <tr>
                <td>Chronic Wounds</td>
                <td></td>
            </tr>
            <tr>
                <td>Syndactyly</td>
                <td></td>
            </tr>
            <tr>
                <td>Alopecia</td>
                <td></td>
            </tr>
            <tr>
                <td>Poikiloderma</td>
                <td></td>
            </tr>
            <tr>
                <td>Relative growth failure</td>
                <td></td>
            </tr>
            <tr>
                <td>Survival after 2 years</td>
                <td></td>
            </tr>
            <tr>
                <td>Parents affected</td>
                <td></td>
            </tr>

        </tbody>
    </table>
        <div style={{ position: "relative", bottom: "0%", left: "83%", width: "16%" }}>
        <Link to="/dashboard">
        <Button type="primary" style={{margin:"4px"}} icon={<DownloadOutlined />} >
          Download
        </Button>
        <br />
        <Button type="primary" style={{margin:"4px"}}>Go to Dashboard</Button>
        </Link>
        </div>
        </>)
    }
    </> 
    );
}
 
export default Summary;