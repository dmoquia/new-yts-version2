function reducer(state, action) {
  switch (action.type) {
    case "GET_NEW_MOVIES":
      return { ...state, movies: action.payload, loading: false };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload, loading: false };
    case "GET_POPULAR":
      return { ...state, popular: action.payload, loading: false };
    case "FETCH_FAILED":
      return { ...state, popular: action.payload };
    case "GET_SORTED":
      return { ...state, sorted: action.payload, loading: false };
    case "GET_SORTED_POP":
      return { ...state, sortedPop: action.payload, loading: false };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SHOW_SEARCH":
      return { ...state, toggleSearch: !state.toggleSearch };
    default:
      return state;
  }
}

export default reducer;
