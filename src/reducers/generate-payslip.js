import { Map } from "immutable";
import { GENERATE_PAYSLIP } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  response: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_PAYSLIP.BEGIN:
      return state.set("loading", true);
    case GENERATE_PAYSLIP.SUCCESS:
      return state.set("response", action.payload).set("loading", false);
    case GENERATE_PAYSLIP.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
