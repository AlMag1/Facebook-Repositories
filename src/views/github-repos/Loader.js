import React from 'react';
import { Col, Row, Spinner } from 'reactstrap';

import Logo from '../../components/Logo';

const Loader = () => {
  return (
    <Row className="no-gutters app-logo">
      <Col>
        <Logo
          className="align-items-center justify-content-center mb-4"
          svgStyle={{ width: 76, height: 76 }}
        />
        <Row className="no-gutters align-items-center justify-content-center">
          <Col xs={12} className="d-flex align-items-center justify-content-center">
            <Spinner color="warning" />
            <div className="ml-3 font-weight-semibold spinner-loading">loading</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Loader;
