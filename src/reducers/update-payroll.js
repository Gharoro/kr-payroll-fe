import { Map } from "immutable";
import { UPDATE_PAYROLL } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  message: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PAYROLL.BEGIN:
      return state.set("loading", true);
    case UPDATE_PAYROLL.SUCCESS:
      return state
        .set("message", action.payload.get("message"))
        .set("loading", false);
    case UPDATE_PAYROLL.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
