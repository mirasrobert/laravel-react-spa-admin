import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    "auth/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("/api/user");
            return response.data;
        } catch (error) {
            if (error.response.status !== 401) {
                return rejectWithValue(error.response.data);
            }

            return rejectWithValue({ message: null });
        }
    }
);

// Async thunk for handling login
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post("/web/auth/login", credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for handling lgoout
export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post("/web/auth/logout");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    isAuthenticated: false,
    user: null,
    status: "idle",
    isLoading: true,
    isLogoutLoading: true,
    isLoginLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.isLoginLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isLoginLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.data; // Save user data
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.isLoginLoading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.pending, (state) => {
                state.status = "loading";
                state.isLogoutLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isLogoutLoading = false;
                state.isAuthenticated = false;
                state.user = null; // Save user data
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.status = "failed";
                state.isLogoutLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
                state.isLoading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
