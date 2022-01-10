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

function App() {
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
      <Icon icon="arrow-down" theme="danger" size="10x" />
    </>
  );
}

export default App;
