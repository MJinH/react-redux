import {createSlice} from "@reduxjs/toolkit"



export const userSlice = createSlice({
    name:"user",
    initialState: {
        userData: {
            name:"",
            email:"",
            comment:""
        },
        pending:null,
        error:false
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true
        }, 
        updateSuccess: (state,action) => {
            state.userData = action.payload
            state.pending = false
        },
        updateError: (state) => {
            state.pending = false
            state.error = true
        },
        removeStart: (state) => {
            state.pending = true
        },
        removeSuccess: (state) => {
            state.userData = {name:"", email:"",comment:""}
            state.pending = false
        },
        removeError: (state) => {
            state.pending = false
            state.error = true
        }
    }
})

export const {updateStart, updateSuccess, updateError, removeStart, removeSuccess, removeError } = userSlice.actions
export default userSlice.reducer