import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  cleanup,
} from "@testing-library/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: "test",
};
const testVerticalProps: MenuProps = {
  defaultIndex: 0,
  mode: "vertical",
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>active link1</MenuItem>
      <MenuItem index={1} disabled>
        disabled link2
      </MenuItem>
      <MenuItem index={2}>link3</MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe("test Menu and MenuItem component", () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId("test-menu");
    activeElement = wrapper.getByText("active link1");
    disabledElement = wrapper.getByText("disabled link2");
  });
  it("should render correct Menu and MenuItem based on default props", () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass("menu test");
    expect(menuElement.getElementsByTagName("li").length).toEqual(3);
    expect(activeElement).toHaveClass("menu-item is-active");
    expect(disabledElement).toHaveClass("menu-item is-disabled");
  });
  it("click items should change active and call the right callback", () => {
    const thirdItem = wrapper.getByText("link3");
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass("is-active");
    expect(activeElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass("is-active");
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
  });
  it("should render vertical mode when mode set to vertical", () => {
    cleanup();
    const wrapper = render(generateMenu(testVerticalProps));
    const menuElement = wrapper.getByTestId("test-menu");
    expect(menuElement).toHaveClass("menu-vertical");
  });
});
