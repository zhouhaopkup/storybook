// import React from "react";
// import Button, { ButtonType, ButtonSize } from "./components/Button/Button";
// import Menu from "./components/Menu/Menu";
// import MenuItem from "./components/Menu/MenuItem";
// import SubMenu from "./components/Menu/SubMenu";
// import Tooltip from "./components/Tooltip/Tooltip";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Icon from "./components/Icon/Icon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
// import Dropdown from "./components/Dropdown/Dropdown";
// import Menu from "./components/Menu/Menu";

function App() {
  // const { SubMenu } = Menu;
  return (
    <>
      {/* <div style={{ margin: "200px" }}>
        <Tooltip
          title={<div>Hello World!</div>}
          placement="topLeft"
          arrowPointAtCenter
        >
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div> */}
      {/* <Menu
        defaultIndex={"0"}
        onSelect={(index) => {
          console.log(index);
        }}
        // mode={"vertical"}
        // defaultOpenSubMenus={["2"]}
      >
        <MenuItem>cool link1</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu> */}
      {/* <Button className="custom">Hello</Button>
      <Button autoFocus>Auto Focus</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Small Danger
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        target="_blank"
      >
        Link
      </Button>
      <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com">
        Link Disabled
      </Button> */}

      {/* <FontAwesomeIcon icon={faCoffee} size="10x" /> */}
      <Icon icon="coffee" theme="danger" size="10x" />
      <Icon icon="arrow-down" theme="primary" size="10x" />

      {/* <Dropdown /> */}

      {/* <Menu mode="horizontal" selectedKeys={["one"]}>
        <Menu.Item key="one">Navigation One</Menu.Item>
        <Menu.Item key="two" disabled>
          Navigation Two Disabled
        </Menu.Item>
        <Menu.Item key="three">Navigation Three</Menu.Item>
        <SubMenu key="SubMenu" title="Navigation Four - SubMenu">
          <Menu.ItemGroup title="Item1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu> */}

      {/* <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Divider />
        <SubMenu key="sub2" title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Divider />
        <SubMenu key="sub4" title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu> */}
    </>
  );
}

export default App;
