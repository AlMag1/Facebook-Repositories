import React from 'react';
import { Col, Row } from 'reactstrap';
import _sortBy from 'lodash/sortBy';

import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';

const Header = ({
  handleSearchInput,
  pageSize,
  sizeOptions,
  setPage,
  setPageSize,
  setTotal,
  sort,
  setSort,
  setData,
  data
}) => {
  const sortItems = ['Name', 'Stars'];
  return (
    <>
      <Row className="no-gutters">
        <Col xs={8}>
          <Input onChange={handleSearchInput} className="search-input" placeholder="Search" />
        </Col>
      </Row>
      <Row className="no-gutters">
        <Col className="d-flex align-items-center justify-content-between">
          <Row className="no-gutters">
            <Col className="repository-results">Repository Results</Col>
          </Row>
          <Row className="no-gutters align-items-center">
            <Col xs={'auto'}>
              <Dropdown
                className="table-dropdown"
                toggleName={`Sort by (${sort})`}
                items={sortItems}
                onClick={event => {
                  const sortBy = event.currentTarget.textContent;
                  setSort(sortBy);
                  setData(_sortBy([...data], sortBy === 'Stars' ? 'stargazers_count' : 'name'));
                }}
              />
            </Col>
            <Col className="d-flex align-items-center">
              <div className="results-per-page">results per page</div>
              <Dropdown
                className="table-dropdown"
                toggleName={pageSize}
                items={[sizeOptions.find(option => option !== pageSize)]}
                onClick={() => {
                  const size = sizeOptions.find(option => option !== pageSize);
                  setPageSize(size);
                  setPage(1);
                  setTotal(Math.ceil(100 / size));
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Header;
