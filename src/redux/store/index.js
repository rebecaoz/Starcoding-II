import {configureStore} from "@reduxjs/toolkit";
import Reducers from '../reducers/index';

export const Store = configureStore({
    reducer: Reducers
});

