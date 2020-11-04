import { Map } from "immutable";
import { GET_SALARY } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  salary: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SALARY.BEGIN:
      return state.set("loading", true);
    case GET_SALARY.SUCCESS:
      return state
        .set("salary", action.payload.get("salary"))
        .set("loading", false);
    case GET_SALARY.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
