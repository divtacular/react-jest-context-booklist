import React from 'react';
import PropTypes from 'prop-types'
import {Button, Col, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faUndo} from "@fortawesome/free-solid-svg-icons";

const EditBook = ({setIsEditing, book, updateBook}) => {

    const [formValues, setFormValues] = React.useState({
        id: book.id,
        title: book.title,
        author: book.author
    });

    const handleChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.id]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {title, author} = formValues;
        updateBook({
            id: book.id, title, author
        });
        cancelEdit();
    };

    const cancelEdit = () => {
        setIsEditing('');//hide editing form
    };

    return (
        <div className={"edit-form"} data-test={"component-edit-book"}>
            <Form
                data-test={"editing-form"}
                className="justify-content-md-center"
                onSubmit={handleSubmit}
            >
                <Row>
                    <Col xs={8} sm={9}>
                        <Row>
                            <Col>
                                <Form.Group controlId="title">
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
                    </Col>
                    <Col>
                        <div className={"actions"}>
                            <Button
                                size={'sm'}
                                variant={''}
                                aria-label={"save changes"}
                                data-test={"save-button"}
                                type="submit"
                            >
                                <span className={"save"}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </span>
                            </Button>
                            <Button
                                size={'sm'}
                                variant={''}
                                aria-label={"Cancel editing"}
                                data-test={"cancel-edit-button"}
                                onClick={cancelEdit}>
                                    <span className={"cancel"}>
                                        <FontAwesomeIcon icon={faUndo}/>
                                    </span>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>

        </div>
    );
};

EditBook.propTypes = {
    setIsEditing: PropTypes.func.isRequired,
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }),
    updateBook: PropTypes.func.isRequired
};

export default EditBook;