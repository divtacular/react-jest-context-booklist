import React from 'react';
import {shallow} from 'enzyme';
import merge from 'lodash/merge'

import {findByTestAttr, checkProps} from "../testUtils";
import EditBook from "../components/EditBook";

const setIsEditingMock = jest.fn();
const updateBookMock = jest.fn();

const book = {
    id: 'aaa-bbb-ccc',
    title: 'Storm Front',
    author: 'Jim Butcher'
};

const defaultProps = {
    setIsEditing: setIsEditingMock,
    updateBook: updateBookMock,
    book: {
        id: 'aaa-bbb-ccc',
        title: 'Storm Front',
        author: 'Jim Butcher'
    }
};
/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props for this setup
 * @param {object} state - Initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const setupProps = {...merge(defaultProps, props)};
    const wrapper = shallow(<EditBook {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

describe('renders properly with basic checks', () => {

    beforeEach(() => {
        React.useState = jest.fn(() => {
            return [
                book,
                jest.fn()
            ];
        })
    });

    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-edit-book');
        expect(component.exists()).toBe(true);
    });

    test('does not throw warning with expected props', () => {
        checkProps(EditBook, defaultProps);
    });
});

test('local state updates when field values change', () => {
    const mockFormState = jest.fn();

    React.useState = jest.fn(() => {
        return [book, mockFormState]
    });

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box-title');
    //Simulate input into box
    inputBox.simulate('change', {
        target: {
            id: 'title',
            value: 'Fool Moon'
        }
    });

    expect(mockFormState).toHaveBeenCalledWith({
        ...book,
        title: 'Fool Moon'
    });
});

describe('save changes actions', () => {
    let wrapper;

    beforeEach(() => {
        React.useState = jest.fn(() => {
            return [book, jest.fn()]
        });
        wrapper = setup();
    });

    test('update method is called with form values. form should close', () => {
        const form = findByTestAttr(wrapper, 'editing-form');
        form.simulate('submit', {
            preventDefault: () => {
            }
        });
        expect(updateBookMock).toBeCalledWith(book);
        expect(setIsEditingMock).toBeCalledWith('');
    });
});

test('cancel button should hide form', () => {
    const wrapper = setup();
    const cancelBtn = findByTestAttr(wrapper, 'cancel-edit-button');
    cancelBtn.simulate('click');
    expect(setIsEditingMock).toBeCalledWith('');
});