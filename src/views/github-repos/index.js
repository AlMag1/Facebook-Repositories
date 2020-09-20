import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';

import { getGithubRepos } from '../../store/github-repos/actions';

import Loader from './Loader';
import Header from './Header';
import Table from './Table';
import Pagination from './Pagination';
import Logo from '../../components/Logo';

const Repos = () => {
  const dispatch = useDispatch();

  const repos = useSelector(state => state.githubReposReducer.data);

  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  const [totalPages, setTotal] = useState(Math.ceil(100 / pageSize));
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(null);
  const [sort, setSort] = useState('Name');

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
        <>
          <Logo
            className="align-items-center ml-4 mt-3"
            textClassName="repository-small"
            svgStyle={{ width: 32, height: 32 }}
          />
          <Row className="no-gutters table-wrapper justify-content-center align-items-center">
            <Col xs={6}>
              <Header
                handleSearchInput={handleSearchInput}
                pageSize={pageSize}
                sizeOptions={sizeOptions}
                setPage={setPage}
                setPageSize={setPageSize}
                setTotal={setTotal}
                sort={sort}
                setSort={setSort}
                setData={setData}
                data={data}
              />
              <Table data={data} pageSize={pageSize} repos={repos} open={open} setOpen={setOpen} />
              <Pagination data={data} page={page} totalPages={totalPages} setPage={setPage} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Repos;
