import { updateStart, updateSuccess, updateError, removeStart, removeSuccess, removeError } from "./userSlice";

export const updateUser = async (userData,dispatch) => {
    dispatch(updateStart())
    try {
        dispatch(updateSuccess(userData))
    } catch {
        dispatch(updateError())
    }
}


export const remove = async (dispatch) => {
    dispatch(removeStart())
    try {
        dispatch(removeSuccess())
    } catch {
        dispatch(removeError())
    }
}