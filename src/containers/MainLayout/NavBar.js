import { NavLink } from "react-router-dom";
import { Menu } from "antd";

import { dataList } from "../../utils/dataList";

export default function NavBar({setCurrent }) {
  const { SubMenu } = Menu;

  const menuHandler = (index) => {
    setCurrent(index);
  };

  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key={1}>
          <NavLink to="/">Home</NavLink>
        </Menu.Item>

        <>
          <Menu.Item key={2}>
            <NavLink to="/form">Form</NavLink>
          </Menu.Item>
        </>

        <Menu.Item key={3}>
          <NavLink to="/genomics">Genomics</NavLink>
        </Menu.Item>

        <SubMenu title="Index">
          {dataList.map((el, index) => {
            if (index) {
              return (
                <Menu.Item onClick={() => menuHandler(index)}>
                  {el.heading}
                </Menu.Item>
              );
            }
          })}
        </SubMenu>
        <Menu.Item onClick={() => window.location.reload()}>Clear</Menu.Item>
      </Menu>
    </div>
  );
}
