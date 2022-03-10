import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload, openMessage: true };

    case CLEAR_MESSAGE:
      return { message: "", openMessage: false };

    default:
      return state;
  }
}
