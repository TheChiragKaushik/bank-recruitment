import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: nanoid(),
                name: action.payload.name,
                dob: action.payload.dob,
                address: action.payload.address,
                email: action.payload.email,
                number: action.payload.number,
                eduQualification: action.payload.eduQualification,
                experience: action.payload.experience,
                position: action.payload.position,
                location: action.payload.location,
                resume: action.payload.resume,
                timestamp: Date.now()
            };
            state.users.push(user);
        }
    }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
