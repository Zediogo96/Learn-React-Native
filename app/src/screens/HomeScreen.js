import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	const handleNavigation = (location) => {
		navigation.navigate(location);
	};

	return (
		<View style={styles.view}>
			<Text style={styles.textStyle}>Welcome! </Text>
			<View style={styles.otherView}>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "dodgerblue" }]}
					onPress={() => handleNavigation("ColorScreen")}
				>
					<Text> Navigate Colors </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "orange" }]}
					onPress={() => handleNavigation("ImageScreen")}
				>
					<Text> Navigate Images </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "red" }]}
					onPress={() => handleNavigation("SquareScreen")}
				>
					<Text> Navigate Square </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "green" }]}
					onPress={() => handleNavigation("CounterScreen")}
				>
					<Text> Navigate Counter </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "purple" }]}
					onPress={() => handleNavigation("TextScreen")}
				>
					<Text> Navigate Text </Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "white", borderColor: "black", borderWidth: 1 }]}
					onPress={() => handleNavigation("BoxScreen")}
				>
					<Text> Navigate Text </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},

	view: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	otherView: {
		marginTop: 20,
		justifyContent: "space-evenly",
	},

	btnStyle: {
		width: 150,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 5,
		marginBottom: 10,
	},
});

export default HomeScreen;
