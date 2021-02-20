const SET_SIGN_IN_BTN_ACTIVE = "SET_SIGN_IN_BTN_ACTIVE";

const initialState = {
  signInBtnActive: false,
};

export const reducerHeader = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGN_IN_BTN_ACTIVE:
      return { signInBtnActive: !state.signInBtnActive };
    default:
      return state;
  }
};

export const mapStateToProps = (state) => ({
  signInBtnActive: state.reducerHeader.signInBtnActive,
});

export const mapDispatchToProps = (dispatch) => ({
  setSignInBtnActive: () => dispatch({ type: "SET_SIGN_IN_BTN_ACTIVE" }),
});
