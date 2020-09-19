import TYPES from './types';

const INITIAL_STATE = {
  loading: false,
  data: []
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.GET_GITHUB_REPOS.START:
      return {
        ...state,
        loading: true
      };

    case TYPES.GET_GITHUB_REPOS.SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload
      };
    default:
      return state;
  }
};

export default reducer;
