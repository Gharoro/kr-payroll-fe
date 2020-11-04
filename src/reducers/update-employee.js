import { Map } from "immutable";
import { UPDATE_EMPLOYEE } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  message: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EMPLOYEE.BEGIN:
      return state.set("loading", true);
    case UPDATE_EMPLOYEE.SUCCESS:
      return state
        .set("message", action.payload.get("message"))
        .set("loading", false);
    case UPDATE_EMPLOYEE.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
