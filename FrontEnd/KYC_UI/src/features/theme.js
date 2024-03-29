import {createSlice} from '@reduxjs/toolkit';

export const themeSlice =createSlice({
    name:'theme',
    initialState:{value:{color:'black',a:'ram'}},
    reducers:{
        changeColor : (state,action)=>{
            state.value=action.payload;
        },
        oldColor : (state)=>{
            state.value={value:{color:'black'}};
        }
      
    }
});

export const {changeColor,oldColor} =themeSlice.actions;
export default themeSlice.reducer;