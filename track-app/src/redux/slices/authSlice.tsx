import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiTracker from "../../api/tracker";
import axios from "axios";

interface InitialState {
	loading: boolean;
	isAuthenticated: boolean;
	user: any;
	error: any;
	success: boolean;
}

const initialState: InitialState = {
	isAuthenticated: false,
	user: null,
	loading: false,
	error: null,
	success: false,
};

export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (
		{ email, password }: { email: string; password: string },
		{ rejectWithValue }
	) => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const response = await apiTracker.post(
				"auth/login",
				{ email: email, password: password },
				config
			);
			return response.data;
		} catch (error: any) {
			if (error.response) {
				return rejectWithValue(error.response.data);
			}
		}
	}
);

const authSlice = createSlice({
	name: "Auth",
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			console.log("FULFILLED")
			const { _id, email, token, username } = action.payload;
			state.loading = false;
			state.isAuthenticated = true;
			state.user = { _id, email, token, username };
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			console.log("REJECTED");
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export default authSlice.reducer;
