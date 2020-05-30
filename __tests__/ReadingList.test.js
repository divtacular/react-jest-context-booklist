//Reading list
//Shows list of books from list obj
//Triggers removal of book from list

import {mount} from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import {findByTestAttr, checkProps} from "../testUtils";


import {ReadingListContext} from "../contexts/contextReadingList";
import ReadingList from "../components/ReadingList";

const defaultProps = {}

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {array} books - List of books for context state
 * @param {mock} removeBook - Mock function for removing books method in context
 * @returns {ShallowWrapper}
 */
const setup = (books = [], removeBook = jest.fn()) => {
    return mount(
        <ReadingListContext.Provider value={{books, removeBook}}>
            <ReadingList/>
        </ReadingListContext.Provider>
    );
}

test('runs without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-reading-list');
    expect(component.exists()).toBe(true);
});

describe('there are no books in the list', () => {

    test('renders empty list message', () => {
        const wrapper = setup();
        const emptyList = findByTestAttr(wrapper, 'list-empty');
        expect(emptyList.exists()).toBe(true);
    });
});

describe('there are books in the list', () => {
    let wrapper;
    let removeBook = jest.fn();
    const mockSetIsEditing = jest.fn();

    const books = [
        {title: 'Fool Moon', author: 'Jim Butcher', id: '1'},
        {title: 'Storm Front', author: 'Jim Butcher', id: '2'},
        {title: 'Death Masks', author: 'Jim Butcher', id: '3'}
    ];

    beforeEach(() => {
        mockSetIsEditing.mockClear();
        React.useState = jest.fn(() => {
            return ['', mockSetIsEditing]
        });
        wrapper = setup(books, removeBook);
    })

    test('list shows the books', () => {
        const booksList = findByTestAttr(wrapper, 'book');
        expect(booksList.length).toBe(books.length);
    });

    test('book is removed from the list', () => {
        const booksList = findByTestAttr(wrapper, 'book');
        const deleteButton = findByTestAttr(booksList, 'delete-button').at(0);
        deleteButton.simulate("click");

        expect(removeBook).toHaveBeenCalled();
    });

    test('edit button triggers edit of book', () => {
        const editButton = findByTestAttr(wrapper, 'edit-button').at(0);
        editButton.simulate('click');
        expect(mockSetIsEditing).toHaveBeenCalledWith('1');
    });
});