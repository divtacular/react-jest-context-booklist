import React, {createContext, useState} from 'react';
import { v1 as uuid } from 'uuid';

export const ReadingListContext = createContext();

const ReadingListContextProvider = (props) => {

    const [books, setBooks] = useState([]);

    const addBook = (title, author) => {
        console.log('addBook');
    }

    const removeBook = (removeID) => {
        console.log('removeBook');
    }

    return (
        <ReadingListContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </ReadingListContext.Provider>
    );
};

export default ReadingListContextProvider;