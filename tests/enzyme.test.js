import React from "react";
import {shallow} from "enzyme";
import App from "../client/src/components/app.jsx";
import Photostab from '../client/src/components/Photostab';

// describe("Hello Word test", () => {
//   const wrapper = shallow(<App/>);
//   test('10 Photos', () => {
//     expect(wrapper.text()).toEqual("10 Photos");
//   })
// });

describe('Photos should exist', () => {
  it('should show photos', () => {
    const wrapper = shallow(<Photostab/>);
      expect(wrapper.exists()).toBe(true);
  })
});