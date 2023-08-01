import React, { useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, counter: state.counter + action.payload };
		case "decrement":
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { counter: 0 });

	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<TouchableOpacity
					onPress={() => dispatch({ type: "decrement", payload: 1 })}
					style={[styles.btnStyle, { backgroundColor: "red" }]}
				>
					<Text style={styles.btnText}>Decrease</Text>
				</TouchableOpacity>
				<Text style={{ marginVertical: 10, fontSize: 35 }}>
					{" "}
					{state.counter}{" "}
				</Text>
				<TouchableOpacity
					onPress={() => dispatch({ type: "increment", payload: 1 })}
					onLongPress={() => dispatch({ type: "increment", payload: 50 })}
					style={[styles.btnStyle, { backgroundColor: "green" }]}
				>
					<Text style={styles.btnText}>Increase</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	innerContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	btnStyle: {
		width: 125,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		marginHorizontal: 5,
	},
	btnText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default CounterScreen;
