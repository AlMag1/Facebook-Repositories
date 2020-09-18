import React from 'react';

import ReactSVG from 'react-svg';

class SvgRender extends React.Component {
  render() {
    const { src, className, ...rest } = this.props;

    return (
      <ReactSVG
        src={src}
        wrapper="span"
        className={`svg-wrap d-inline-flex align-item-center ${className ? className : ''}`}
        {...rest}
      />
    );
  }
}

export default SvgRender;
