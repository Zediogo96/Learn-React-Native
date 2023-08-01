import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);
	return (
		<View style={styles.container}>
			<View style={styles.innerContainer}>
				<TouchableOpacity
					onPress={() => setCounter(counter - 1)}
					style={[styles.btnStyle, { backgroundColor: "red" }]}
				>
					<Text style={styles.btnText}>Decrease</Text>
				</TouchableOpacity>
				<Text style={{ marginVertical: 10, fontSize: 35 }}> {counter} </Text>
				<TouchableOpacity
					onPress={() => setCounter(counter + 1)}
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
