import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';

import Loader from './Loader';
import { getGithubRepos } from '../../store/github-repos/actions';

import Header from './Header';
import Table from './Table';
import Pagination from './Pagination';

const Repos = () => {
  const dispatch = useDispatch();

  const repos = useSelector(state => state.githubReposReducer.data);

  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [totalPages, setTotal] = useState(Math.ceil(100 / pageSize));
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(null);

  const sizeOptions = [8, 16];

  useEffect(() => {
    const params = {
      pageSize,
      page
    };
    dispatch(getGithubRepos(params)).then(res => setData([...res]));
  }, [dispatch, pageSize, page]);

  const handleSearchInput = event => {
    const filtered = repos.filter(d => d.name.includes(event.target.value));

    setTotal(Math.ceil(filtered.length === pageSize ? 100 / pageSize : filtered.length / pageSize));
    setData([...filtered]);
  };

  return (
    <div className="github-repos">
      {!repos.length ? (
        <Loader />
      ) : (
        <Row className="no-gutters table-wrapper">
          <Col>
            <Header
              handleSearchInput={handleSearchInput}
              pageSize={pageSize}
              sizeOptions={sizeOptions}
              setPage={setPage}
              setPageSize={setPageSize}
              setTotal={setTotal}
            />
            <Table data={data} pageSize={pageSize} repos={repos} open={open} setOpen={setOpen} />
            {data.length ? (
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            ) : null}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Repos;
