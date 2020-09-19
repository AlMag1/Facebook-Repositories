import React from 'react';
import { Col, Row, Spinner } from 'reactstrap';

import SvgRender from '../../components/SvgRender';
import facebook from '../../assets/svg/facebook.svg';

const Loader = () => {
  return (
    <Row className="no-gutters github-repos__loading">
      <Col>
        <Row className="no-gutters align-items-center justify-content-center mb-4">
          <Col xs={'auto'} className="d-flex">
            <SvgRender
              src={facebook}
              style={{ width: 76, height: 76 }}
              className="github-repos__loading-facebook"
            />
          </Col>
          <Col xs={'auto'} className="github-repos__loading-repository">
            <div>Repository</div>
          </Col>
        </Row>
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
