import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const dishCartSlice = createSlice({
    name: "dishCart",
    initialState,
    reducers : {
        addDish : (state, action)=>{
            state.push(action.payload)
        },
        removeDish : (state , action) =>{
            return state.filter((item)=> item.uId  !== action.payload);
        },
        resetCart : () =>{
            return initialState;
        }
    }
}
)
export const {addDish, removeDish, resetCart} = dishCartSlice.actions; 
export default dishCartSlice;
