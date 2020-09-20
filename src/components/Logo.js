import React from 'react';
import { Col, Row } from 'reactstrap';

import SvgRender from './SvgRender';
import facebook from '../assets/svg/facebook.svg';

const Logo = ({ className, textClassName, svgStyle }) => {
  return (
    <Row className={`no-gutters ${className ? className : ''}`}>
      <Col xs={'auto'} className="d-flex">
        <SvgRender src={facebook} style={svgStyle} className="text-blue" />
      </Col>
      <Col xs={'auto'} className={`app-logo__repository ${textClassName ? textClassName : ''}`}>
        <div>Repository</div>
      </Col>
    </Row>
  );
};

export default Logo;
