import {shallow} from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import {findByTestAttr, checkProps} from "../testUtils";
import AddBook from "../components/AddBook";

const defaultProps = {}

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props for this setup
 * @param {object} state - Initial state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const setupProps = {...defaultProps, ...props};
    const wrapper = shallow(<AddBook {...setupProps} />);

    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
}

test('runs without error', () => {

    const mockUseContext = jest.fn().mockReturnValue(jest.fn());
    React.useContext = mockUseContext;

    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-add-book');
    expect(component.exists()).toBe(true);
});

describe("state controlled input field", () => {
    let mockSetBookEntryState = jest.fn();
    let mockUseContext = jest.fn();
    let wrapper;

    beforeEach(() => {
        mockSetBookEntryState.mockClear();
        mockUseContext.mockClear();

        //Replace React useState with a mock jest function
        React.useState = jest.fn(() => {
            return ['', mockSetBookEntryState]
        });
        React.useContext = jest.fn(() => {
            return mockUseContext
        });

        wrapper = setup({});
    });

    test('state updates title value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box-author');

        const mockEventFormValues = {
            id: 'author',
            value: 'Jim Butcher'
        }

        const mockEvent = {
            target: {...mockEventFormValues}
        };

        //Simulate input into box
        inputBox.simulate("change", mockEvent);
        //State handler transforms before calling setState
        expect(mockSetBookEntryState).toHaveBeenCalledWith({[mockEventFormValues.id]: mockEventFormValues.value});
    });

    //Test setCurrentGuess was called with a value of "". We infer that the input would be emptied. I will add a check too
    test("clear fields on submit", () => {
        const inputBoxTitle = findByTestAttr(wrapper, 'input-box-title');
        const submitBtn = findByTestAttr(wrapper, 'submit-button');

        //Simulate input into box
        submitBtn.simulate("click", {
            preventDefault: () => {
            }
        });

        expect(mockSetBookEntryState).toHaveBeenCalledWith({title: '', author: ''});
    })
});

//TODO: test integration w/Book list ... setFields to be called?

