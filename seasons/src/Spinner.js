import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
}

// If I don't pass any message from the parent component, Spinner component will use
// the defaultProps message
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;
