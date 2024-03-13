import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userPhone: null,
        userEmail: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setUserPhone: (state, action) => {
            state.userPhone = action.payload;
        },
        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        },
    },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;