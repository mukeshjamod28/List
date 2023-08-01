import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../components/Reducers/reducers";


const store = configureStore({
    reducer:{
      todo: todoSlice
    }
});

export default store;


// import { applyMiddleware, createStore } from "redux";
// // import rootReducer from "../components/Reducers/rootReducer";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";
// import taskReducer from "../components/Reducers/reducers";

// const store = createStore(
//     taskReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

