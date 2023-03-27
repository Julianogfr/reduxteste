const initialLoginFormState = {
  email: '',
  password: '',
};

export const loginFormReducer = (state = initialLoginFormState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialAuthState = {
  isLoggedIn: false,
  user: null,
};

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'REGISTER':
      return { ...state, isLoggedIn: true, user: action.payload };
    default:
      return state;
  }
};