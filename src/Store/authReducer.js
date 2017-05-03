import reduc from "redux";

console.log("Reducer");

var reducer = (state = {}, action) => {
    return state;
};

var store = redux.createStore(reducer);

var currentState = store.getState();

