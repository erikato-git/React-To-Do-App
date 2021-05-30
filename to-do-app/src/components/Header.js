import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

//Just type 'rafc'
export const Header = (props) => {
    return (
        <header className="header">
            {/* <h1 style={headingStyle}>{props.title}</h1> */}
            <h1>{props.title}</h1>
            <Button 
                color={props.showAdd ? 'red' : 'green' } 
                text={props.showAdd ? 'Close' : 'Add'} 
                onClick={props.onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }


export default Header;


