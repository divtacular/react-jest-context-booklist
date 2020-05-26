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
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'addbook-component');
    expect(component.exists()).toBe(true);
});

describe("state controlled input field", () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        //Replace React useState with a mock jest function
        React.useState = jest.fn(() => {
            return ['', mockSetCurrentGuess]
        });
        wrapper = setup({});
    });

    test('state updates title value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box-author');
        const mockEvent = {
            target: {
                value: 'Jim Butcher'
            }
        };

        //Simulate input into box
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('Jim Butcher');
    });

    test('state updates title value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box-title');
        const mockEvent = {
            target: {
                value: 'Storm Front'
            }
        };

        //Simulate input into box
        inputBox.simulate("change", mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('Storm Front');
    });

    //Test setCurrentGuess was called with a value of "". We infer that the input would be emptied. I will add a check too
    // test("clear guess on submit", () => {
    //     const inputBox = findByTestAttr(wrapper, 'input-box');
    //     const submitBtn = findByTestAttr(wrapper, 'submit-button');
    //
    //     //Simulate input into box
    //     submitBtn.simulate("click", {
    //         preventDefault: () => {
    //         }
    //     });
    //
    //     expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    //     expect(inputBox.text().length).toBe(0);
    // })
});

