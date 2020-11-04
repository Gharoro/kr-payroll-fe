import { Map } from "immutable";
import { All_EMPLOYEES } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  employees: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case All_EMPLOYEES.BEGIN:
      return state.set("loading", true);
    case All_EMPLOYEES.SUCCESS:
      return state
        .set("employees", action.payload.get("employees"))
        .set("loading", false);
    case All_EMPLOYEES.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
