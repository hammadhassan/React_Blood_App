import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import { AuthReducer } from './authReduces/authReducer'

const middleware = compose(
    applyMiddleware(thunk)
);

export const store = createStore(
    AuthReducer,
    middleware
)

store.subscribe(() => {
    console.log("STORE CHANGED", store.getState())
})