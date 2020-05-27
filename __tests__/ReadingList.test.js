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
 * @returns {ShallowWrapper}
 */
const setup = (books = []) => {

    const removeBooks = jest.fn();

    return mount(
        <ReadingListContext.Provider value={{books}}>
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
    const books = [
        {book: 'Fool Moon', author: 'Jim Butcher', id: 1},
        {book: 'Storm Front', author: 'Jim Butcher', id: 2},
        {book: 'Death Masks', author: 'Jim Butcher', id: 3}
    ];

    beforeEach(() => {
        wrapper = setup(books);
    })

    test('', () => {
        const booksLI = findByTestAttr(wrapper, 'book');
        expect(booksLI.length).toBe(books.length);
    });

});