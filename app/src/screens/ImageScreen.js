import React from "react";

import { Text, View, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
	return (
		<View style={{ flex: 1, alignItems: "center", marginVertical: 10}}>
			<ImageDetail
				title="Forest"
				image={require("../../assets/forest.jpg")}
				score={8}
			/>
			<ImageDetail
				title="Beach"
				image={require("../../assets/beach.jpg")}
				score={7}
			/>
			<ImageDetail
				title="Mountain"
				image={require("../../assets/mountain.jpg")}
				score={9}
			/>
		</View>
	);
};

export default ImageScreen;
