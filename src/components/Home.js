import { Link } from "react-router-dom";
import { Button, Space } from "antd";

export default function Home() {

  const homePage = (
    <div>
      <h1>Welcome</h1>
      <Space direction="vertical">
        <Button type="link" large>
          <Link to="/form">Click this to fill the Clinical Features!</Link>
        </Button>
        <Button type="link" large>
          <Link to="/genomics">
            Click this to get the Filtered Genomics Data
          </Link>
        </Button>
      </Space>
    </div>
  );
  return (
    <div>
     {homePage}
    </div>
  );
}
