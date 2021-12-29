// import React from "react";
// import Button, { ButtonType, ButtonSize } from "./components/Button/Button";
// import Menu from "./components/Menu/Menu";
// import MenuItem from "./components/Menu/MenuItem";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  return (
    <>
      <div style={{ margin: "200px" }}>
        <Tooltip
          title={<div>Hello World!</div>}
          placement="topLeft"
          arrowPointAtCenter
        >
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </div>
      {/* <Menu
        defaultIndex={0}
        onSelect={(index) => {
          console.log(index);
        }}
        // mode={"vertical"}
      >
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1} disabled>
          cool link2
        </MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
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
    </>
  );
}

export default App;
