const initState = {
  success: [],
  pending: false,
  fail: {},
  details: {},  
  basket: [],
  notification: false
}
export default function pizzaReducer(state = initState, action) {
 switch (action.type) {
  case "ASYNC_GET_ALL_REQUEST":
    return {
      ...state,
      success: action.pizza
    };
  case "PENDING":
    return {
      ...state,
      pending: action.pending
    };
  case "FAIL":
    return {
      ...state,
      fail: action.fail
    };
  case "ASYNC_GET_DETAILS_SUCCESS":
    return {
      ...state,
      details: action.details
    };
  case "ASYNC_NOTIFICATION":
    return {
      ...state,
      notification: action.notification
    };
  case "ASYNC_ADD_BASKET":
    let filter = state.success.filter((item) => item.id === action.basket)
    return {
      ...state,
      basket: [...state.basket, ...filter]
    };
    default:
      return state; 
  }
}