import { Map } from "immutable";
import { GET_PAYSLIP } from "../actions";

const initialState = Map({
  error: Map(),
  loading: false,
  payslip: Map(),
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PAYSLIP.BEGIN:
      return state.set("loading", true);
    case GET_PAYSLIP.SUCCESS:
      return state
        .set("payslip", action.payload.get("payslip"))
        .set("loading", false);
    case GET_PAYSLIP.FAILURE:
      return state.set("error", action.payload).set("loading", false);
    default:
      return state;
  }
}
