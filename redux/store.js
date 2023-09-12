import { configureStore } from "@reduxjs/toolkit";
import { detailsReducer } from "./reducer";

const store = configureStore({
    reducer:{

        details:detailsReducer
    }
})
export default store 
/*
// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { detailsReducer } from './reducer';

const store = configureStore({
    reducer:{

        details:detailsReducer
    }

});

export default store;
*/