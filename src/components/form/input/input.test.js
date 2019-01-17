import React from "react";
import { shallow } from "enzyme";
import Input from "./index";

describe("Input component", () => {
  it("Renders correctly", () => {
    const wrapper = shallow(<Input value="" />);
    console.log(wrapper.debug());
    expect(wrapper.find(".input-text")).toBeDefined();
  });

  it("Passes correct params", () => {
    const otherParams = {};
    const wrapper = shallow(<Input value="" others={otherParams} />);
    expect(wrapper.find(".input-text").prop("others")).toEqual(otherParams);
  });
});
