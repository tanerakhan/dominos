import actions from './actions';
const initState = {
  pizza: []
}
export default function pizzaReducer(state = initState, action) {
 switch (action.type) {
  case actions.GET_ALL_REQUEST:
    return {
      ...state
    };
  case actions.GET_ALL_REQUEST_SUCCESS:
    return {
      ...state,
      pizza: action.pizza
    };

  default:
    return state;
  }
}