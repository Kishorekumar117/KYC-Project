import {createSlice} from '@reduxjs/toolkit';

export const userslice =createSlice({
    name:'user',
    initialState:{value:{name:'',age:0,email:''}},
    reducers:{
        login: (state,action)=>{
            state.value=action.payload;
        },
        logout: (state)=>{
            state.value={value:{name:'',age:0,email:''}};
        }
    }
});

export const {login,logout} =userslice.actions;
export default userslice.reducer;