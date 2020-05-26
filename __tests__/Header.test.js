import {shallow} from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import {findByTestAttr, checkProps} from "../testUtils";

import Header from "../components/Header";

const defaultProps = {
    count: 0
}

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props for this setup
 * @param {object} state - Initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const setupProps = {...defaultProps, ...props};
    const wrapper = shallow(<Header {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

test('runs without error', () => {
    const wrapper = setup();
    const headerComponent = findByTestAttr(wrapper, 'header-component');
    expect(headerComponent.exists()).toBe(true);
});

test('runs with expected props', () => {
    const expectedProps = {
        count: 1
    };
    checkProps(Header, expectedProps);
});

test('displays zero items text', () => {
    const wrapper = setup();
    const noItemsText = findByTestAttr(wrapper, 'no-items');
    expect(noItemsText.exists()).toBe(true);
});

test('displays count of items text', () => {
    const wrapper = setup({count: 1});
    const hasItemsText = findByTestAttr(wrapper, 'has-items');
    expect(hasItemsText.exists()).toBe(true);
});
