import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';

const ReadingList = () => {
    return (
        <Row data-test={"component-reading-list"}>
            <Col>
                <ul className={"reading-list"}>
                    <li>
                        <Row>
                            <Col md={11}>
                                <p>
                                    <span className={"title"}>Fool Moon</span>
                                    <span className={"author"}>Jim Butcher</span>
                                </p>
                            </Col>
                            <Col>
                                <Button aria-label={"Remove this book from your list"}>x</Button>
                            </Col>
                        </Row>

                    </li>
                    <li>
                        <Row>
                            <Col md={11}>
                                <p>
                                    <span className={"title"}>Fool Moon</span>
                                    <span className={"author"}>Jim Butcher</span>
                                </p>
                            </Col>
                            <Col>
                                <Button aria-label={"Remove this book from your list"}>x</Button>
                            </Col>
                        </Row>

                    </li>
                </ul>
            </Col>
        </Row>
    );
};

export default ReadingList;