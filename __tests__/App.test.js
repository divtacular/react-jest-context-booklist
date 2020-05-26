import {shallow} from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import {findByTestAttr} from "../testUtils";

import App from "../pages/index.js";

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props for this setup
 * @param {object} state - Initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const setupProps = {...props};
    const wrapper = shallow(<App {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

test('runs withour error', () => {
    const wrapper = setup();
});