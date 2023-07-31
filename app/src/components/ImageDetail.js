import React from "react";

import { Text, Image, View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowDim = Dimensions.get("window");

const ImageDetail = (props) => {
	const { image, title, score } = props;

	return (
		<View style={styles.container}>
			<Image style={styles.imageStyle} source={image} />
			<Text style={{ zIndex: 50 }}>{title}</Text>
			<Text>Image score - {score}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginVertical: 10,
	},
	imageStyle: {
		borderRadius: 10,
		width: windowDim.width * 0.8,
		height: windowDim.height * 0.3,
	},
});

export default ImageDetail;
