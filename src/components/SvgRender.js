import React from 'react';

import ReactSVG from 'react-svg';

const SvgRender = ({ src, className, ...rest }) => {
  return (
    <ReactSVG
      src={src}
      wrapper="span"
      className={`svg-wrap d-inline-flex align-item-center ${className ? className : ''}`}
      {...rest}
    />
  );
};

export default SvgRender;
