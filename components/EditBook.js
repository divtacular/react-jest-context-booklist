import React from 'react';
import PropTypes from 'prop-types'
import {Button, Col, Form, Row} from "react-bootstrap";

const EditBook = ({isEditing, book}) => {
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

    const handleSubmit = (id) => {

    };

    let output = <></>;

    if (isEditing) {
        output =
            <Form
                data-test={"editing-form"}
                className="justify-content-md-center"
                onSubmit={handleSubmit}
            >
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Control
                                type="text"
                                data-test={"input-box-title"}
                                placeholder="Enter title"
                                value={book.title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="author">
                            <Form.Control
                                type="text"
                                data-test={"input-box-author"}
                                placeholder="Enter author"
                                value={book.author}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
    }

    return (
        <div data-test={"component-edit-book"}>
            {output}
        </div>
    );
};

EditBook.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    })
}

export default EditBook;