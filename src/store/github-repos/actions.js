import axios from 'axios';
import TYPES from './types';

export const getGithubRepos = params => dispatch => {
  const { pageSize, page } = params;
  dispatch({ type: TYPES.GET_GITHUB_REPOS.START });

  return axios
    .get(`https://api.github.com/users/facebook/repos?per_page=${pageSize}&page=${page}`)
    .then(response => {
      dispatch({
        type: TYPES.GET_GITHUB_REPOS.SUCCESS,
        payload: response.data
      });
      return response.data;
    })
    .catch(error => {
      dispatch({ type: TYPES.GET_GITHUB_REPOS.ERROR, payload: error });
      throw error;
    });
};
