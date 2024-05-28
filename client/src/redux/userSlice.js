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
        fullName: '',
        myDate: null,
        show: false,
        paymentId: '',
        showInput: false,
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
        SetFullName: (state, action) => {
            state.fullName = action.payload;
        },
        SetMyDate: (state, action) => {
            state.myDate = action.payload;
        },
        SetShow: (state, action) => {
            state.show = action.payload;
        },
        SetPaymentId: (state, action) => {
            state.paymentId = action.payload;
        },
        SetShowInput: (state, action) => {
            state.showInput = action.payload;
        },
    },
});

export const {SetUser, SetUserRole, SetUserEmail, SetUserPhone, SetUsers, SetGrandTotal , SetUserId, SetFullName, SetMyDate, SetShow, SetPaymentId, SetShowInput} = userSlice.actions;
export default userSlice.reducer;