import { Link } from "react-router-dom";
import { Button, Space } from "antd";

import IntroPg1 from "./IntroPages/IntroPg1";

export default function Home() {

  return (
    <div>
     <div>
       {/*<h1>Welcome</h1>
      <Space direction="vertical">
        <Button type="link" large>
          <Link to="/form">Click this to fill the Clinical Features!</Link>
        </Button>
        <Button type="link" large>
          <Link to="/genomics">
            Click this to get the Filtered Genomics Data
          </Link>
        </Button>
      </Space> */}
      <IntroPg1 />
    </div>
    </div>
  );
}
