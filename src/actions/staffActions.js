import {
  GET_STAFF,
  ADD_STAFF,
  DELETE_STAFF,
  SET_LOADING,
  STAFF_ERROR,
} from "./types";

export const getStaff = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/staff");
    const data = await res.json();

    dispatch({
      type: GET_STAFF,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/staff", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_STAFF,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteStaff = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/staff/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_STAFF,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: STAFF_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
