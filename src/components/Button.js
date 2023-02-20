import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, w, h }) => (
    <div>
        <button className={`bg-primaryblue ${w} ${h} text-white rounded-full`}>
        {name}
    </button>
    </div>
);

Button.propTypes = {
    name: PropTypes.string,
    w: PropTypes.string,
    h: PropTypes.string
}

export default Button