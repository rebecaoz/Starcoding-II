import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartReducer';

export default combineReducers({
    cartReducer: cartReducer,
});