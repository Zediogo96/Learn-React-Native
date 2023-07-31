import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// destructured only navigation from props
const HomeScreen = ({ navigation }) => {
	const handleNavigation = (location) => {
		// this is how we navigate to other screens, the string passed in is the name of the screen,
		// already defined in App.js, similar to Routes in React
		navigation.navigate(location);
	};

	return (
		<View style={styles.view}>
			<Text style={styles.textStyle}>Welcome! </Text>
			<View style={styles.otherView}>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "dodgerblue" }]}
					onPress={() => handleNavigation("List")}
				>
					<Text> Navigate List </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "orange" }]}
					onPress={() => handleNavigation("ImageScreen")}
				>
					<Text> Navigate Images </Text>
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
		flexDirection: "row",
		justifyContent: "space-evenly",
	},

	btnStyle: {
		width: 150,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 5,
	},
});

export default HomeScreen;
