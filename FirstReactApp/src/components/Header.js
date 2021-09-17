import PropTypes from 'prop-types'
import Button from './Button';
import React from 'react';

function Header({title, toogleForm}) {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button textColor="#45f" text="Add" background="#4944" onClick={toogleForm}></Button>
        </header>
    );
}

Header.defaultProps = {
    title: 'Todo APP'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;