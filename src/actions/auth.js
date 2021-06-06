import * as api from "../api";

export const login = (credentails) => async (dispatch) => {
  try {
    const { data } = await api.login(credentails);
    dispatch({ type: "LOGIN", payload: data });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};

export const register = (credentails) => async (dispatch) => {
  try {
    const { data } = await api.register(credentails);
    dispatch({ type: "REGISTER", payload: data });
  } catch (error) {
    dispatch({ type: "ERROR" });
  }
};
