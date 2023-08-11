import {createSlice} from "@reduxjs/toolkit"
export const themeSlice=createSlice({
    name:"themeSlice",
    initialState:{theme:true},
    reducers: {
        toggleTheme:(state)=>
        {
            console.log(state);
            state.theme=!(state.theme);
            console.log(state);
        },
    },
});
export const {toggleTheme}=themeSlice.actions; //generate auto generated set of actions
export default themeSlice.reducer;