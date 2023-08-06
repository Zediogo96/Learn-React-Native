import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for the initial state of the counter
interface InitialState {
	value: number; // 'value' represents the counter value
}

// Define a constant string to be used as the name of the slice (Redux state)
const UpdateCounter: string = "UpdateCounter";

const initialState: InitialState = {
	value: 15,
};

// Create a Redux slice using the createSlice function from Redux Toolkit
export const counterSlice = createSlice({
	name: UpdateCounter, // The name of the slice
	initialState: initialState, // The initial state for the counter
	reducers: {
		// Each reducer modifies the state based on the action dispatched
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
		setCounter: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

// Extract the action creators from the created slice using object destructuring
export const { increment, decrement, incrementByAmount, setCounter } = counterSlice.actions;

// You must export the reducer as follows for it to be able to be read by the store.
export default counterSlice.reducer;
