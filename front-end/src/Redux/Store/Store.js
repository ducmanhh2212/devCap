// import { createStore, applyMiddleware, compose } from "redux";
// import { rootReducer } from "../Reducer/RootReducer";
// import thunk from "redux-thunk";

// const middleware = compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export let storeRedux = createStore(rootReducer, middleware);

import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "../Reducer/RootReducer";
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true
        }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;