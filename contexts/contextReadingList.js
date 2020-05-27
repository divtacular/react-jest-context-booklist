import React, {createContext, useState} from 'react';
import { v1 as uuid } from 'uuid';

export const ReadingListContext = createContext();

const ReadingListContextProvider = (props) => {

    const [books, setBooks] = useState([]);

    const addBook = (title, author) => {
        console.log('addBook', title, author);

        const id = uuid();

        setBooks([
            ...books,
            {title, author, id}
        ]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    return (
        <ReadingListContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </ReadingListContext.Provider>
    );
};

export default ReadingListContextProvider;