import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
   case FETCH_WEATHER:
    return [ action.payload.data, ...state];
  }

  return state;
}

// In redux you dont want to manipulate the state,
// instead you need to create a new instance of state
