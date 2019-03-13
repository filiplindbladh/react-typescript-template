import * as React from "react";
import { shallow, mount, render } from "enzyme";
import App from "../App";

it("renders correctly", () => {
    const output = shallow(<App test="it works" />);
    expect(output.debug()).toMatchSnapshot();
});
