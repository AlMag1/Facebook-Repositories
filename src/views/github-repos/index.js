import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';

import Loader from './Loader';
import { getGithubRepos } from '../../store/github-repos/actions';

const Repos = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.githubReposReducer.data);
  const loading = useSelector(state => state.githubReposReducer.loading);

  useEffect(() => {
    dispatch(getGithubRepos());
  }, [dispatch]);

  return (
    <div className="github-repos">
      {loading ? (
        <Loader />
      ) : (
        repos.map(repo => (
          <Row className="no-gutters">
            <Col>{repo.name}</Col>
          </Row>
        ))
      )}
    </div>
  );
};

export default Repos;
