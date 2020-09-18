import React from 'react';
import { Col, Row, Spinner } from 'reactstrap';

import SvgRender from '../../components/SvgRender';
import facebook from '../../assets/svg/facebook.svg';

const Loader = () => {
  return (
    <Row className="no-gutters align-items-center github-repos__loading">
      <Col xs={'auto'} className="d-flex mr-2">
        <SvgRender src={facebook} style={{ width: 40, height: 40 }} className="text-primary" />
      </Col>
      <Col xs={'auto'} className="github-repos__loading-repository">
        <div>Repository</div>
      </Col>
      <Col xs={12} className="d-flex align-items-center">
        <Spinner color="warning" />
        <div>loading</div>
      </Col>
    </Row>
  );
};

export default Loader;
