import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {ReadingListContext} from "../contexts/contextReadingList";

const ReadingList = () => {
    const {books, removeBook} = React.useContext(ReadingListContext);

    const handleClickRemove = (id) => {
        removeBook(id);
    }

    return (
        <Row data-test={"component-reading-list"}>
            <Col>
                <ul className={"reading-list"}>
                    {books.length ? books.map(({title, author, id}) => {
                            return (
                                <li key={id} data-test={"book"}>
                                    <Row>
                                        <Col md={11}>
                                            <p>
                                                <span className={"title"}>{title}</span>
                                                <span className={"author"}>{author}</span>
                                            </p>
                                        </Col>
                                        <Col>
                                            <Button
                                                onClick={() => { handleClickRemove(id)}}
                                                aria-label={"Remove this book from your list"}
                                            >x</Button>
                                        </Col>
                                    </Row>
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