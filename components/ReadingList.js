import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencilAlt, faMinusSquare, faCheck, faUndo} from '@fortawesome/free-solid-svg-icons'

import {ReadingListContext} from "../contexts/contextReadingList";
import EditBook from "./EditBook";

const ReadingList = () => {
    const {books, removeBook, updateBook} = React.useContext(ReadingListContext);

    const [isEditing, setIsEditing] = React.useState('');

    const toggleIsEditing = (id = false) => {
        setIsEditing(isEditing === id ? '' : id);
    }

    return (
        <Row data-test={"component-reading-list"}>
            <Col>
                <ul className={"reading-list"}>
                    {books.length ? books.map(({title, author, id}) => {
                            return (
                                <li key={id} data-test={"book"}>
                                    {isEditing === id ?
                                        <EditBook
                                            setIsEditing={setIsEditing}
                                            updateBook={updateBook}
                                            book={
                                                {title, author, id}
                                            }
                                        /> :
                                        <Row>
                                            <Col xs={8} sm={9}>
                                                <p>
                                                    <span className={"title"}>{title}</span>
                                                    <span className={"author"}>{author}</span>
                                                </p>
                                            </Col>
                                            <Col>
                                                <div className={"actions"}>
                                                    <Button
                                                        size={'sm'}
                                                        variant={''}
                                                        aria-label={"edit this book"}
                                                        data-test={"edit-button"}
                                                        onClick={() => {
                                                            toggleIsEditing(id)
                                                        }}>
                                                        <span className={"edit"}>
                                                            <FontAwesomeIcon icon={faPencilAlt}/>
                                                        </span>
                                                    </Button>
                                                    <Button
                                                        size={'sm'}
                                                        variant={''}
                                                        aria-label={"Remove this book from your list"}
                                                        data-test={"delete-button"}
                                                        onClick={() => {
                                                            removeBook(id)
                                                        }}>
                                                        <span className={"remove"}>
                                                            <FontAwesomeIcon icon={faMinusSquare}/>
                                                        </span>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    }
                                </li>
                            )
                        }
                    ) : <li className={"empty"} data-test={"list-empty"}>Your reading list is empty</li>}
                </ul>
            </Col>
        </Row>
    );
};

export default ReadingList;