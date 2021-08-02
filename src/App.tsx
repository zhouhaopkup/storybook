import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/Button";

function App() {
  return (
    <>
      <Button className="custom">Hello</Button>
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
      </Button>
    </>
  );
}

export default App;
