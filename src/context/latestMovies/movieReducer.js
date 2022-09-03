import {
  GET_NEW_MOVIES,
  SET_SEARCH_TERM,
  GET_SORTED,
  SET_PAGE,
  SHOW_SEARCH,
  FETCH_FAILED,
} from "../types";
function reducer(state, action) {
  switch (action.type) {
    case GET_NEW_MOVIES:
      return { ...state, movies: action.payload, loading: false };
    case FETCH_FAILED:
      return { ...state, movies: action.payload, loading: false };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload, loading: false };
    case GET_SORTED:
      return { ...state, sorted: action.payload, loading: false };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SHOW_SEARCH:
      return { ...state, toggleSearch: !state.toggleSearch };
    default:
      return state;
  }
}

export default reducer;
