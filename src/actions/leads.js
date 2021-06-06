import * as api from "../api";

export const getLeads = () => async (dispatch, getState) => {
  try {
    const { data } = await api.fetchLeads(getState().auth.token);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addLeads = (lead) => async (dispatch, getState) => {
  try {
    const { data } = await api.addLeads(lead, getState().auth.token);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editLeads = (lead) => async (dispatch, getState) => {
  // console.log(lead);
  try {
    const { data } = await api.editLeads(lead, getState().auth.token);
    dispatch({ type: "EDIT_LEAD", payload: data });
    // dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
