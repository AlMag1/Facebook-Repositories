import React from 'react';
import { Col, Row } from 'reactstrap';
import UltimatePaginationBootstrap4 from 'react-ultimate-pagination-bootstrap-4';

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <Row className="no-gutters repos-table__pagination">
      <Col xs={'auto'}>
        <UltimatePaginationBootstrap4
          currentPage={page}
          totalPages={totalPages}
          onChange={page => {
            setPage(page);
          }}
          hideFirstAndLastPageLinks={true}
        />
      </Col>
    </Row>
  );
};

export default Pagination;
