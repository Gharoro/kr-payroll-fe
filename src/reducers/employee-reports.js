import { Map } from "immutable";
import { EMPLOYEE_REPORTS } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  reports: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case EMPLOYEE_REPORTS.BEGIN:
      return state.set("loading", true);
    case EMPLOYEE_REPORTS.SUCCESS:
      return state
        .set("reports", action.payload.get("reports"))
        .set("loading", false);
    case EMPLOYEE_REPORTS.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
