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
    }

    const removeBook = (id) => {
        debugger;
        dispatch(dispatchFormatter('removeBook', {
            id
        }));
    }

    return (
        <ReadingListContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </ReadingListContext.Provider>
    );
};

export default ReadingListContextProvider;