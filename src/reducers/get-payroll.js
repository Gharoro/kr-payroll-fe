import { Map } from "immutable";
import { GET_PAYROLL } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  response: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAYROLL.BEGIN:
      return state.set("loading", true);
    case GET_PAYROLL.SUCCESS:
      return state.set("response", action.payload).set("loading", false);
    case GET_PAYROLL.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
