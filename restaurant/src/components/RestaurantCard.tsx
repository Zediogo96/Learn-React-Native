import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Business } from "../types/Business";

interface RestaurantCardProps {
	restaurant: Business;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.cardImage} source={{ uri: restaurant.image_url }} />
			<Text style={styles.restaurantName}> {restaurant.name} </Text>
			<Text style={styles.details}>
				{restaurant.rating} Stars, {restaurant.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginRight: 10,
	},
	cardImage: {
		width: 250,
		height: 120,
		borderRadius: 10,
	},
	restaurantName: {
		fontWeight: "bold",
		fontSize: 16,
		marginTop: 10,
	},
	details: {
		color: "grey",
        marginLeft: 3,
		marginVertical: 5,
	},
});

export default RestaurantCard;
