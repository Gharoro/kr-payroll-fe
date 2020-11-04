import { Map } from "immutable";
import { GET_EMPLOYEE } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  employee: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEE.BEGIN:
      return state.set("loading", true);
    case GET_EMPLOYEE.SUCCESS:
      return state
        .set("employee", action.payload.get("employee"))
        .set("loading", false);
    case GET_EMPLOYEE.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
