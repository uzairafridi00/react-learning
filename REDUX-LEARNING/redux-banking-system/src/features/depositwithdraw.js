import {createSlice} from "@reduxjs/toolkit"

export const depositWithdrawSlice = createSlice({
    name: "depositwithdraw",
    initialState: {
        money: 10000
    },
    reducers: {
        deposit:(state,action) => {
            state.money += action.payload
        },

        withdraw:(state,action) => {
            state.money -= action.payload
        }
    }
})


export const { deposit,withdraw } = depositWithdrawSlice.actions

export default depositWithdrawSlice.reducer