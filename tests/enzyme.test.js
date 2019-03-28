import React from "react";
import {shallow} from "enzyme";
import App from "../client/src/components/app.jsx";

describe("Hello Word test", () => {
  const wrapper = shallow(<App/>);
  test('says hello world', () => {
    expect(wrapper.text()).toEqual("Hello World");
  })
});