import { configureStore } from "@reduxjs/toolkit";
import dishCartSlice from "./slices/dishCartSlice";

const store = configureStore({
    reducer :{
        dishCart : dishCartSlice.reducer
    }
});

export default store;