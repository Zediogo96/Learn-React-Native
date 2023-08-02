import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import useRestaurantByID from "../hooks/useRestaurantByID";
import { Business } from "../types/Business";
import { FlatList } from "react-native-gesture-handler";

const RestaurantScreen = ({ route }: any) => {
	const ID = route.params.id;

	const [searchAPI, result, errorMessage]: [
		(arg0: string) => Promise<void>,
		Business,
		string
	] = useRestaurantByID();

	useEffect(() => {
		searchAPI(ID);
	}, []);

	return (
		<View>
			<Text style={styles.title}>{result.name}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.image} source={{ uri: item }} />;
				}}
			/>
			<Text style={styles.text}>
				{result.rating} Stars, {result.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 35,
		fontWeight: "bold",
		marginTop: 10,
		marginLeft: 15,
	},
	text: {
		fontSize: 18,
		marginLeft: 15,
		marginTop: 15,
		color: "grey",
	},
	image: {
		height: 200,
		width: 300,
		marginLeft: 15,
		marginTop: 10,
		borderRadius: 10,
	},
});

export default RestaurantScreen;
