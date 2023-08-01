import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";

import { Dimensions } from "react-native";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
	switch (action.type) {
		case "change_red":
			// don't modify state directly (e.g. state.red = state.red - 15)
			// instead: return a completely new object, with the updated state
			return { ...state, red: Math.max(0, Math.min(255, state.red + action.payload)) };
		case "change_green":
			return { ...state, green: Math.max(0, Math.min(255, state.green + action.payload)) };
		case "change_blue":
			return { ...state, blue: Math.max(0, Math.min(255, state.blue + action.payload)) };
		default:
			return state;
	}
};

const SquareScreen = () => {
	// initial state === { red: 0, green: 0, blue: 0 }
	// dispatch === runMyReducer
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

	// destructure state
	const { red, green, blue } = state;

	const windowDim = Dimensions.get("window");

	return (
		<View>
			<ColorCounter
				title="Red"
				onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}
				colorValue={red}
			/>
			<ColorCounter
				title="Green"
				onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
				colorValue={green}
			/>
			<ColorCounter
				title="Blue"
				onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
				colorValue={blue}
			/>

			<View
				style={{
					width: windowDim.width * 0.8,
					height: windowDim.height * 0.3,
					marginHorizontal: windowDim.width * 0.1,
					marginVertical: windowDim.height * 0.05,
					backgroundColor: `rgb(${red}, ${green}, ${blue})`,
					borderRadius: 20,
				}}
			/>
		</View>
	);
};
export default SquareScreen;
