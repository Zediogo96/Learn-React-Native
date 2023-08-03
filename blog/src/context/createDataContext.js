import React, { useReducer, createContext } from "react";

// Export a Higher Order Function that sets up a custom context provider
export default (reducer, actions, initialState) => {
	const Context = createContext();

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);

		// Initialize an empty object to store the bound action functions
		const boundActions = {};

		// Loop through the actions object to create "bound" versions of the actions
		for (let key in actions) {
			// Each action function in the actions object receives the dispatch function as an argument

			// A "bound" action function is created by invoking the original action function with the dispatch function
			// The bound action function is a convenience wrapper around dispatch, making it easier to trigger specific actions
			boundActions[key] = actions[key](dispatch);
		}

		return (
			<Context.Provider value={{ state, ...boundActions }}>
				{children}
			</Context.Provider>
		);
	};

	// Return an object with the custom context (Context) and the Provider component
	return { Context, Provider };
};
