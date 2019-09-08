import * as actions from '../actions';

const initialState = {
  token: '',
  authenticating: false,
  authError: '',
  accountType: '',
  address: '',
  contact: {
    firstName: '',
    lastName: '',
    phone: ''
  },
  email: '',
  id: null,
  name: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_START: {
      return {
        ...state,
        authenticating: true,
        authError: ''
      }
    }
    case actions.LOGIN_SUCCESS: {
      return {
        ...state,
        authenticating: false,
        token: action.payload
      }
    }
    case actions.LOGIN_FAILURE: {
      return {
        ...state,
        authenticating: false,
        authError: action.payload
      }
    }
    case actions.LOGOUT: {
      return resetState();
    }
    default:
      return state;
  }
}

const resetState = () => {
  return {
    ...initialState
  };
}

export default reducer;