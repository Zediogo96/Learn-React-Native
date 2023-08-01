import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Dimensions } from "react-native";

const windowDim = Dimensions.get("window");

const BoxScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.viewOne}>
				<Text style={{ fontSize: 45 }}> App</Text>
			</View>
			<View style={styles.viewTwo}>
				<View
					style={[
						styles.coloredCointainer,
						{
							backgroundColor: "red",
						},
					]}
				/>
				<View
					style={[
						styles.coloredCointainer,
						{
							backgroundColor: "green",
							top: 80,
						},
					]}
				/>
				<View
					style={[
						styles.coloredCointainer,
						{
							backgroundColor: "blue",
						},
					]}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},

	viewOne: {
		flex: 1,
		borderWidth: 2,
		borderColor: "black",
		height: windowDim.height * 0.1,
		justifyContent: "center",
		alignItems: "center",
		width: windowDim.width * 0.9,
		borderRadius: 10,
		marginBottom: 10,
	},
	viewTwo: {
		flex: 9,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		width: windowDim.width * 0.9,
		padding: 10,

		borderRadius: 10,
		borderWidth: 2,
		borderColor: "black",
	},

	coloredCointainer: {
		height: 80,
		width: 80,
		opacity: 0.5,
		borderWidth: 2,
	},
});

export default BoxScreen;
