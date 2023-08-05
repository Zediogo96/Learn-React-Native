import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

const TrackListScreen = ({ navigation }: { navigation: any }) => {
	return (
		<SafeAreaViewAndroid style={styles.container}>
			<Text style={{ fontSize: 35 }}>RegisterScreen</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate("TrackDetail")}
				style={styles.button}
			>
				<Text style={styles.buttonText}> Track </Text>
			</TouchableOpacity>
		</SafeAreaViewAndroid>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		marginTop: 15,
		backgroundColor: "dodgerblue",
		padding: 15,
		borderRadius: 10,
		width: "50%",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 20,
	},
});

export default TrackListScreen;
