import React, {createContext, useState, useEffect} from 'react';
import {v1 as uuid} from 'uuid';

import firebase from "../libs/firebase";

export const ReadingListContext = createContext();

const ReadingListContextProvider = (props) => {
    const fdb = firebase.database();
    const [books, setBooks] = useState([]);

    const addBook = (title, author) => {
        const id = uuid();

        setBooks([
            ...books,
            {title, author, id}
        ]);
    }

    const removeBook = (id) => {
        //setBooks(books.filter(book => book.id !== id));
        let userRef = fdb.ref('books-list/' + id);
        //userRef.remove()
        console.log(userRef);
    }

    React.useEffect(() => {
        const booksListRef = fdb.ref('books-list');
        booksListRef.on('value', (snapshot) => {
            const bookList = snapshot.val();
            if(~bookList.length) {
                setBooks([...bookList]);
            }
        });
    }, [])

    return (
        <ReadingListContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </ReadingListContext.Provider>
    );
};

export default ReadingListContextProvider;