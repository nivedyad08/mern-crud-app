import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userDetails: (state, action) => {
            state.userInfo = action.payload;

        }
    }
})

export const { userDetails } = userSlice.actions
export default userSlice.reducer