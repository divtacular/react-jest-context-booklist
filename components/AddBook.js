import React, {useContext, useState, useEffect} from 'react';

import ReadingListContextProvider from "../contexts/contextReadingList";

const AddBook = (props) => {
    //const book = useContext(ReadingListContextProvider);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    return (
        <div data-test={"component-add-book"}>
            <form>
                <div className="row">
                    <div className={"input-field s6"}>
                        <input type={"text"} name={"title"} id={"title"} value={title} onChange={(e) => {
                            setTitle(e.target.value);
                        }}/>
                        <label htmlFor={"title"}>Book</label>
                    </div>

                    <div className={"input-field s6"}>
                        <input type={"text"} name={"author"} id={"author"} value={author}/>
                        <label htmlFor={"author"}>Author</label>
                    </div>
                </div>
                <div className="row">
                    <div className="s12">
                        <button type={"submit"}>add to list</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBook;