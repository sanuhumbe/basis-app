import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Avatar, Popover } from "antd";
import "antd/dist/antd.css";
import "../index.css";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Home extends Component {
  state = {
    collapsed: true,
    login: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  logout = () => {
    console.log("logout");
  };

  render() {
    const text = <span>User name</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
        <span style={{ cursor: "pointer" }} onClick={this.logout}>
          Log Out
        </span>
      </div>
    );

    const buttonWidth = 70;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <img
            className="logo"
            src="https://static.wixstatic.com/media/51b1dd_07f5dce7e7314013ae03263d6e01843e~mv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/51b1dd_07f5dce7e7314013ae03263d6e01843e~mv2.png"
          />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Popover
              style={{ margin: "11px 0px 0px 25px" }}
              placement="bottomRight"
              title={text}
              content={content}
              trigger="click"
            >
              <Avatar
                style={{
                  margin: "10px 25px",
                  padding: "2px",
                  border: "1px solid #d1d1f0",
                }}
                size={{ xs: 24, sm: 32, md: 30, lg: 45, xl: 45 }}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />{" "}
            </Popover>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Basis React-Redux App ©2020 Created by Sanika Humbe
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
