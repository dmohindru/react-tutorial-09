import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "../thunks/addUser";
import { fetchUsers } from "../thunks/fetchUsers";


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.pending, (state, action) => {
           // Update our state object however appropriat
           // to show the user what we are loading data
           state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            // Update our state object however appropriat
            // to show the user that request for fulfilled
            state.isLoading = false;
            state.data = action.payload;

        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            // Update our state object however appropriat
            // to show the user that request was failed
            state.isLoading = false;
            state.error = action.error;
        });
        // Extra reducers for addUser operation
        builder.addCase(addUser.pending, (state, action) => {
            // Update our state object however appropriat
            // to show the user what we are loading data
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state, action) => {
            // Update our state object however appropriat
            // to show the user that request for fulfilled
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state, action) => {
            // Update our state object however appropriat
            // to show the user that request was failed
            state.isLoading = false;
            state.error = action.error;
        });

    }
});

export const usersReducer = usersSlice.reducer;