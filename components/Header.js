import React from 'react';
import PropTypes from "prop-types";

const Header = ({count}) => {
    return (
        <div className={"center-align"} data-test={"header-component"}>
            <h1 data-test={"title"}>Reading List</h1>
            { count > 0 ?
                <p data-test={"has-items"}>Your list has {count} books</p> :
                <p data-test={"no-items"}>Your reading list is empty</p> }
        </div>
    );
};

Header.propTypes = {
    count: PropTypes.number.isRequired
};

export default Header;