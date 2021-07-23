import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  GlobalOutlined,
  HomeTwoTone,
  FormOutlined,
  CaretDownOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { dataList } from "../../utils/dataList";
import i18next from "i18next";

export default function NavBar({ setCurrent }) {
  const { SubMenu } = Menu;

  const menuHandler = (index) => {
    setCurrent(index);
  };
  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "nl",
      name: "Dutch",
      country_code: "nl",
    },
    {
      code: "hn",
      name: "हिंदी",
      country_code: "in",
    },
    {
      code: "es",
      name: "español",
      country_code: "esp",
    },
  ];

  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key={1}>
          <NavLink to="/">
            <HomeTwoTone />
          </NavLink>
        </Menu.Item>

        <>
          <Menu.Item key={2}>
            <NavLink to="/form">
              <FormOutlined /> Form
            </NavLink>
          </Menu.Item>
        </>

        {/* <Menu.Item key={3}>
          <NavLink to="/genomics">Genomics</NavLink>
        </Menu.Item> */}

        <Menu.Item onClick={() => window.location.reload()}>
          <DeleteOutlined style={{height:"100%", width: "100%"}}/>
        </Menu.Item>

        <SubMenu icon={<GlobalOutlined />}>
          {languages.map(({ code, name, country_code }, index) => {
            return (
              <Menu.Item onClick={() => i18next.changeLanguage(code)}>
                {name}
              </Menu.Item>
            );
          })}
        </SubMenu>
        <SubMenu icon={<CaretDownOutlined />}>
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
      </Menu>
    </div>
  );
}
