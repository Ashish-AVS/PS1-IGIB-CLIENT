import React from "react";
import { Layout, Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

import classes from "./Layouts.module.css";
import NavBar from "./NavBar";

const { Header, Content, Footer } = Layout;
export default function Layouts(props) {

  const location = useLocation();
  return (
    <div>
      <div className={classes.layout}>
        <Layout className={classes.layout}>
        <Header>
          <div className={classes["logo"]} />
          <NavBar current={props.current} setCurrent={props.setCurrent} setRadioData={props.setRadioData}/>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              {location.pathname.slice(1).toUpperCase()}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className={classes["site-layout-content"]}>
          {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>© CSIR-IGIB</Footer>
        </Layout>
      </div>
    </div>
  );
}
