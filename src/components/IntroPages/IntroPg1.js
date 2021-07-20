import { Link } from "react-router-dom";
import { Button, Space } from "antd";

import classes from "./IntoPg1.module.css";

const hStyle = { color: "red" };

const IntroPg1 = () => {
  return (
    <div
      className={classes["main"]}
      //     style={{
      //     backgroundImage: `url("https://www.eb-clinet.org/fileadmin/_processed_/f/b/csm_Diagnostic_Tool_Birmingham_e69956bcba.jpg")`,
      //     backgroundPosition: 'center',
      //     backgroundSize: 'cover',
      //     backgroundRepeat: 'no-repeat',
      // }}
    >
      <div className={classes["welcometxt"]}>
        Epidermolysis Bullosa Clinical Diagnostic Matrix
      </div>
      <div className={classes["butterfly"]}>
        <img
          src={`${process.env.PUBLIC_URL}/New_Pictures/all_logos.jpg`}
          alt="butterflypic"
        />
      </div>
      <Space direction="vertical">
        <Button type="link" large>
          <Link to="/form">
            <div style={{ fontSize: "21px" }}>
              Click this to fill the Clinical Features!
            </div>
          </Link>
        </Button>
        <Button type="link" large>
          <Link to="/genomics">
            <div style={{ fontSize: "21px" }}>
              Click this to get the Filtered Genomics Data
            </div>
          </Link>
        </Button>
      </Space>
      <div style={{ marginTop: "10%" }}>
        For further details see. Yenamandra V.K., Moss C, Sreenivas V, Khan M,
        Sivasubbu S, Sharma VK, Sethuraman G. Development of a clinical
        Diagonistic Matrix for characterising Inherited Epidermolysis Bullosa.
        British J Dermatol (in press)
        <Button type="link" large>
        <a target="_blank" href="https://doi.org/10.1111/bjd.15221">Read here</a>
        </Button>
          
      </div>
    </div>
  );
};

export default IntroPg1;
