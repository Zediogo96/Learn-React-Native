import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
	const friends = [
		{ name: "John Doe", age: 20 },
		{ name: "Jane Doe", age: 21 },
		{ name: "John Smith", age: 22 },
		{ name: "Jane Smith", age: 23 },
		{ name: "José Diogo", age: 26 },
		{ name: "Diana Meireles", age: 25 },
	];

	return (
		<FlatList
			// horizontal // same as horizontal={true}
			// showsHorizontalScrollIndicator={false} // hide the horizontal scroll bar
			showsVerticalScrollIndicator={false} // hide the vertical scroll bar
			style={styles.listStyle}
			keyExtractor={(friend) => friend.name} // keyExtractor is a function that returns a string that will be used as the key for each item in the list
			data={friends}
			renderItem={({ item }) => {
				// element === { item: { name: 'John Doe' }, index: 0 }
				// use destructuring to get the object directly =>
				// meaning { element } instead of element
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	listStyle: {},
	textStyle: { marginVertical: 75, marginHorizontal: 5 },
});

export default ListScreen;
