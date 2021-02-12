const getAll = () => ({
  type: "GET_ALL_REQUEST",
});
const getDetails = (id) => ({
  type: "GET_DETAILS_SUCCESS",
  payload: parseInt(id)
});
const addBasket = (id) => ({
  type: "ADD_BASKET",
  payload: parseInt(id)
});
const notification = (payload) => ({
  type: "NOTIFICATION",
  payload
});
const pending = () => ({
  type: "PENDING",
});
const fail = () => ({
  type: "FAIL",
});

export { getDetails, getAll, pending, fail, addBasket, notification };