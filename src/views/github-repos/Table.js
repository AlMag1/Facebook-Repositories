import React, { Fragment } from 'react';
import { Col, Row, Collapse } from 'reactstrap';

import SvgRender from '../../components/SvgRender';
import arrow from '../../assets/svg/arrow.svg';
import star from '../../assets/svg/star.svg';

const Table = ({ data, pageSize, repos, open, setOpen }) => {
  return (
    <Row className="no-gutters repos-table">
      <Col>
        {data
          .filter((_, index) => index < pageSize)
          .map((repo, index) => (
            <Fragment key={index}>
              <Row
                key={index}
                className={`no-gutters repos-table__row ${
                  index === repos.length - 1 || open === repo.id ? 'mb-0' : ''
                } ${open === repo.id ? 'active' : ''}`}
                onClick={() => (open === repo.id ? setOpen(null) : setOpen(repo.id))}
              >
                <Col xs={4} className="font-weight-regular">
                  {repo.name}
                </Col>
                <Col xs={4} className="star-wrapper">
                  <div className="star">
                    <SvgRender
                      src={star}
                      style={{ width: 12, height: 12 }}
                      className="text-white"
                    />
                  </div>
                  <div className="star-count">{repo.stargazers_count}</div>
                </Col>
                <Col xs={4} className="justify-content-end d-flex">
                  <SvgRender src={arrow} style={{ width: 10, height: 10 }} />
                </Col>
              </Row>
              <Collapse className="repos-table__collapse" isOpen={open === repo.id}>
                <div className="title">Description:</div>
                <div className="description">{repo.description}</div>
              </Collapse>
            </Fragment>
          ))}
      </Col>
    </Row>
  );
};

export default Table;
