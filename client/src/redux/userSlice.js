import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        grandTotal: null,
        users: null,
        userPhone: null,
        userEmail: null,
        userRole: '',
        userFirstName: '',
        userLastName: '',
        userId:'',
    },
    reducers: {
        SetUser: (state, action) => {
            state.user = action.payload;
        },
        SetUserPhone: (state, action) => {
            state.userPhone = action.payload;
        },
        SetUserEmail: (state, action) => {
            state.userEmail = action.payload;
        },
        SetUserRole: (state, action) => {
            state.userRole = action.payload;
        },
        SetUsers: (state, action) => {
            state.users = action.payload;
        },
        SetGrandTotal: (state, action) => {
            state.grandTotal = action.payload;
        },
        SetUserId: (state, action) => {
            state.userId = action.payload;
        },
    },
});

export const {SetUser, SetUserRole, SetUserEmail, SetUserPhone, SetUsers, SetGrandTotal , SetUserId} = userSlice.actions;
export default userSlice.reducer;