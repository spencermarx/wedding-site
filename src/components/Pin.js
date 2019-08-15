import React from 'react';

const handleClick = (e) => {
    e.preventDefault();
    window.open('https://www.plimoth.org/visit/getting-here', '_blank');
}

const Pin = (props) => {
    const { color, name } = props;
    return (
        <div>
            <p className="Pin-Label">{name}</p>
            <div
                id="Pin"
                className="bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
                onClick={handleClick}
            />
            <div className="pulse" />
        </div>
    );
};

export default Pin;