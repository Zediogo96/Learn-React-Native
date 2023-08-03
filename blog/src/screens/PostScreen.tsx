import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";

const PostScreen = () => {
	return (
		<SafeAreaViewAndroid style={styles.container} >
			<Text>PostScreen</Text>
		</SafeAreaViewAndroid>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default PostScreen;
