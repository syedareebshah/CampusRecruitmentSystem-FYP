import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    adminLogin: false,
    compLogin: false,
    studLogin: false
}

export const loginSlice = createSlice({
    name: 'login',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        AdminFlag: (state, action) => {
            state.adminLogin = action.payload
            console.log(state.adminLogin, "adi here")
        },
        CompFlag: (state, action) => {
            state.compLogin = action.payload
            console.log(state.compLogin, "comp here")
        },
        StudFlag: (state, action) => {
            state.studLogin = action.payload
            console.log(state.studLogin, "stu here")
        },

    },
})

export const { AdminFlag,CompFlag,StudFlag } = loginSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectLoginFlag = (state) => state.login

export default loginSlice.reducer