export const ADD_BUS = "ADD_BUS";
export const SET_BUSES = "SET_BUSES";
import { insertBus, fetchBuses } from "../helpers/db";

export const addBus = (title, program) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertBus(title, program);
      console.log(dbResult);
      dispatch({
        type: ADD_BUS,
        busData: {
          id: dbResult.insertId,
          title: title,
          program: program,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadBuses = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchBuses();
      console.log(dbResult);
      dispatch({ type: SET_BUSES, buses: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
