import PropTypes from 'prop-types'
import Button from './Button';
import React from 'react';

function Header(props) {
    const onClick = (e) => {
        console.log(e.target)
    }
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button textColor="#45f" text="text" background="#4944" onClick={onClick}></Button>
        </header>
    );
}

Header.defaultProps = {
    title: 'Todo APP'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const style = {
    color: 'red',
    fontSize: 25
}

export default Header;