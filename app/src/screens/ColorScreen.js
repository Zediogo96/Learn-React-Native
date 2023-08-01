import React, { useState } from "react";
import {
	View,
	TouchableOpacity,
	Text,
	FlatList,
	StyleSheet,
} from "react-native";

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	console.log(colors);

	return (
		<View style={styles.container}>
			<View style={styles.containerBtn}>
				<TouchableOpacity
					onPress={() => {
						// create a new array with the new color added
						setColors([...colors, randomRgb()]);
					}}
					style={[styles.btnStyle, { backgroundColor: "orange" }]}
				>
					<Text style={styles.btnText}>Pick a Color</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				style={{ flex: 1, marginTop: 20 }}
				showsVerticalScrollIndicator={false}
				horizontal={false} // Set horizontal to false to get vertical layout
				numColumns={3} // Specify the number of columns per row
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => (
					<View
						style={{
							height: 100,
							width: 100,
							marginVertical: 10,
							marginHorizontal: 10,
							backgroundColor: item,
							borderRadius: 20,
						}}
					/>
				)}
			/>
		</View>
	);
};

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	containerBtn: {
		alignItems: "center",
		marginTop: 20,
	},
	btnStyle: {
		width: 150,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 5,
	},
	colorContainer: {
		flexDirection: "row",
	},
});

export default ColorScreen;
