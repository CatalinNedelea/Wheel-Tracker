import { ADD_BUS, SET_BUSES } from "./buses-actions";
import Bus from "../models/bus";

const initialState = {
  buses: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSES:
      return {
        buses: action.buses.map(
          (bs) => new Bus(bs.id.toString(), bs.title, bs.program)
        ),
      };
    case ADD_BUS:
      const newBus = new Bus(
        action.busData.id.toString(),
        action.busData.title,
        action.busData.program
      );
      return {
        buses: state.buses.concat(newBus),
      };
    default:
      return state;
  }
};
