import React from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

import {ReadingListContext} from "../contexts/contextReadingList";

const AddBook = () => {
    const {addBook} = React.useContext(ReadingListContext);
    const [formValues, setFormValues] = React.useState({
        title: '',
        author: ''
    });

    const handleChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.id]: target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {title, author} = formValues;

            addBook(title, author);
            setFormValues({
                title: '',
                author: ''
            });
    };

    return (
        <Form
            data-test={"component-add-book"}
            className="justify-content-md-center"
            onSubmit={handleSubmit}
        >
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            type="text"
                            data-test={"input-box-title"}
                            placeholder="Enter title"
                            value={formValues.title}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="author">
                        <Form.Label>Author: </Form.Label>
                        <Form.Control
                            type="text"
                            data-test={"input-box-author"}
                            placeholder="Enter author"
                            value={formValues.author}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant=""
                            className={"float-right"}
                            data-test={"submit-button"}
                            type="submit"
                    >
                        add to list
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default AddBook;