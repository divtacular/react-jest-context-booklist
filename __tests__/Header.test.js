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

    const mockUseContext = jest.fn().mockReturnValue({
        books: []
    });
    React.useContext = mockUseContext;

    const wrapper = setup();
    const headerComponent = findByTestAttr(wrapper, 'header-component');
    expect(headerComponent.exists()).toBe(true);
});



test('displays zero items text', () => {
    const wrapper = setup();
    const noItemsText = findByTestAttr(wrapper, 'no-items');
    expect(noItemsText.exists()).toBe(true);
});

test('displays count of items text', () => {
    const mockUseContext = jest.fn().mockReturnValue({
        books: [
            {title: 'Storm Front', author: 'Jim Butcher',  id: 1},
            {title: 'Fool Moon', author: 'Jim Butcher',  id: 2}
        ]
    });
    React.useContext = mockUseContext;

    const wrapper = setup();
    const hasItemsText = findByTestAttr(wrapper, 'has-items');

    expect(hasItemsText.exists()).toBe(true);
    expect(hasItemsText.text()).toBe('Your list has 2 books');
});
