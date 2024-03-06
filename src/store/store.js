import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import infoReducer from "./infoSlice";
import {ordersApi} from './ordersApi'
// import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store=configureStore({
    reducer:{
        auth:authReducer,
        info:infoReducer,
        // order:orderReducer,

        //for using RTK query
        [ordersApi.reducerPath]:ordersApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
            // Middleware setup using a callback function

        return getDefaultMiddleware().concat(ordersApi.middleware)
            // Concatenate default middleware provided by Redux Toolkit with additional middleware from ordersApi.middleware

        
    }
})


export default store;