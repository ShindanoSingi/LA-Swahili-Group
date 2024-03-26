import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        users: null,
        userPhone: null,
        userEmail: null,
        userRole: '',
        userFirstName: '',
        userLastName: '',

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
        setUserRole: (state, action) => {
            state.userRole = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    },
});

export const {setUser, setUserRole, setUserEmail, setUserPhone, setUsers} = userSlice.actions;
export default userSlice.reducer;