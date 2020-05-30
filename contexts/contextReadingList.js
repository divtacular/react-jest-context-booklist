import React, {createContext} from 'react';
import {v1 as uuid} from 'uuid';

import reducerReadingList from '../reducers/reducerReadingList';
import {dispatchFormatter} from '../utils/helpers';

export const ReadingListContext = createContext();

const ReadingListContextProvider = (props) => {

    const [books, dispatch] = React.useReducer(reducerReadingList, []);

    const addBook = (title, author) => {
        const id = uuid();
        dispatch(dispatchFormatter('addBook', {
            id, title, author
        }));
    };

    const updateBook = (book) => {
        dispatch(dispatchFormatter('updateBook', book));
    }

    const removeBook = (id) => {
        dispatch(dispatchFormatter('removeBook', {
            id
        }));
    };

    //Load storage on mount, Next JS SSR has no localstorage
    React.useEffect(() => {
        const sessionBooks = JSON.parse(localStorage.getItem("booksList"));
        if(sessionBooks) {
            dispatch(dispatchFormatter('setBooks', sessionBooks));
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem("booksList", JSON.stringify(books));
    }, [books]);

    return (
        <ReadingListContext.Provider value={{books, addBook, removeBook, updateBook}}>
            {props.children}
        </ReadingListContext.Provider>
    );
};

export default ReadingListContextProvider;