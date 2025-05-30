import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  text = 'Button', 
  className = '', 
  src, 
  onClick, 
  type = 'button', 
}) => {
  return (
    <button
      type={type}
      className={`btn cursor-pointer bg-black text-white py-6 rounded-2xl capitalize px-10 ${className}`}
      onClick={onClick}
    >
      {src ? (
        <>
          {text}
          <img src={src} alt="" className="inline mr-2" />
        </>
      ) : (
        text
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;