import React, {useContext, useState, useEffect} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

import ReadingListContextProvider from "../contexts/contextReadingList";

const AddBook = (props) => {
    //const book = useContext(ReadingListContextProvider);

    const [formValues, setFormValues] = React.useState({
        title: '',
        author: ''
    });

    const handleChange = (({target}) => {
        setFormValues({
            ...formValues,
            [target.id]: target.value
        })
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        //TODO: Set BooksList state

        setFormValues({
            title: '',
            author: ''
        });
    }

    return (
        <Row data-test={"component-add-book"} className="justify-content-md-center">
            <Col md={6} >
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <Form.Label>Title:</Form.Label>
                                <Form.Control type="text"
                                              data-test={"input-box-title"}
                                              placeholder="Enter title"
                                              onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group controlId="author">
                                <Form.Label>Author: </Form.Label>
                                <Form.Control type="text"
                                              data-test={"input-box-author"}
                                              placeholder="Enter author"
                                              onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Row>
                        <Col>
                            <Button variant="primary"
                                    data-test={"submit-button"}
                                    type="submit"
                                    onClick={handleSubmit}>
                                add to list
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    );
};

export default AddBook;