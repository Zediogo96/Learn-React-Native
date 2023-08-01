import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ColorCounter = (props) => {
	const { title, onIncrease, onDecrease, colorValue } = props;

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={{ fontSize: 45 }}>{title}</Text>
			</View>

			<TouchableOpacity
				style={[
					styles.btnStyle,
					{ backgroundColor: "orange", opacity: colorValue === 0 ? 0.5 : 1 },
				]}
				onPress={onDecrease}
				disabled={colorValue === 0}
			>
				<Text style={styles.btnText}> - </Text>
			</TouchableOpacity>

			<View style={{ width: 80, alignItems: "center" }}>
				<Text style={[styles.colorValue]}>{colorValue}</Text>
			</View>

			<TouchableOpacity
				style={[
					styles.btnStyle,
					{ backgroundColor: "green", opacity: colorValue === 255 ? 0.5 : 1 },
				]}
				onPress={onIncrease}
			>
				<Text style={styles.btnText}> + </Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
		marginHorizontal: 20,
	},
	titleContainer: {
		width: 150, // Adjust the width as needed
		marginRight: 20,
	},
	btnStyle: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 5,
	},
	btnText: {
		fontSize: 30,
	},
	colorValue: {
		maringHorizontal: 20,
		fontSize: 30,
	},
});

export default ColorCounter;
