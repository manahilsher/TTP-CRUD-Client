import axios from 'axios';

// ACTION TYPES;
const FETCH_ALL_CAMPUSES = 'FETCH_ALL_CAMPUSES';

const allCampuses = [
  {
    name: 'Brooklyn College',
    address: 'Brooklyn',
    imageUrl: '',
    description: ''
  },
  {
    name: 'CSI',
    address: 'Staten Island',
    imageUrl: '',
    description: ''
  },
  {
    name: 'John Jay',
    address: 'New York',
    imageUrl: '',
    description: ''
  }
];

// ACTION CREATORS;
const fetchAllCampuses = campuses => {
  return {
    type: FETCH_ALL_CAMPUSES,
    payload: campuses
  };
};

// THUNK CREATORS;
export const fetchAllCampusesThunk = () => dispatch => {
  // return axios
  //   .get("/api/campuses")
  //   .then((res) => res.data)
  //   .then((campuses) => dispatch(fetchAllCampuses(campuses)))
  //   .catch((err) => console.log(err));

  return dispatch(fetchAllCampuses(allCampuses));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_CAMPUSES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
