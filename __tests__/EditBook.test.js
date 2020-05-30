import React from 'react';
import {shallow} from 'enzyme';
// import {render} from "@testing-library/react";

import {findByTestAttr, checkProps} from "../testUtils";
import EditBook from "../components/EditBook";

const defaultProps = {
    isEditing: false,
    book: {
        id: 'aaa-bbb-ccc', title: 'Storm Front', author: 'Jim Butcher'
    }
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
    const wrapper = shallow(<EditBook {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-edit-book');
    expect(component.exists()).toBe(true);
});

test('does not throw warning with expected props', () => {
    checkProps(EditBook, defaultProps);
});

//fields hidden when not editing
test('fields hidden when not editing', () => {
    const wrapper = setup({
        isEditing: false
    });
    const editForm = findByTestAttr(wrapper, 'editing-form');
    expect(editForm.exists()).toBe(false);
});

//fields visible when editing
test('fields visible when editing', () => {
    const wrapper = setup({
        isEditing: true
    });
    const editForm = findByTestAttr(wrapper, 'editing-form');
    expect(editForm.exists()).toBe(true);
});
//updates state when changed field
//updates state when finished