import React from 'react';
import {ReadingListContext} from "../contexts/contextReadingList";

const Header = () => {
    const {books} = React.useContext(ReadingListContext)

    return (
        <div className={"text-center"} data-test={"header-component"}>
            <h1 data-test={"title"}>Reading List</h1>
            { books.length > 0 ?
                <p data-test={"has-items"}>Your list has {books.length} {books.length > 1 ? 'books': 'book'}</p> :
                <p data-test={"no-items"}>Your reading list is empty</p> }
        </div>
    );
};

export default Header;