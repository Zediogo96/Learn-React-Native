import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { Business } from "@/types/Business";
import RestaurantCard from "./RestaurantCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface ResultListProps {
	title: string;
	results: Business[];
	price: string;
}

const ResultList: React.FC<ResultListProps> = ({ title, results, price }) => {
	const navigation = useNavigation<any>();

	const filteredResultsByPrice: Business[] = results.filter((result) => {
		return result.price === price;
	});

	if (filteredResultsByPrice.length === 0) return null;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				data={filteredResultsByPrice}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() => navigation.navigate("RestaurantScreen", { id: item.id })}
					>
						<RestaurantCard restaurant={item} />
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: "bold",
		fontSize: 18,
		marginVertical: 10,
	},
	container: {},
});

export default ResultList;
