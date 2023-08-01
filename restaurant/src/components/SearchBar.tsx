import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
	// meaning of this line: updateState is a function that takes a string
	// as an argument and returns nothing (void)
	updateState: (newText: string) => void;
	onTermSubmit: () => void;
	searchState?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchState,
	updateState,
	onTermSubmit,
}) => {
	return (
		<View style={styles.background}>
			<Ionicons
				name="search"
				size={24}
				style={{ alignSelf: "center" }}
				color="black"
			/>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				onEndEditing={() => onTermSubmit()}
				onChangeText={(newText) => updateState(newText)}
				style={styles.inputStyle}
				placeholder="Search"
				value={searchState}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		flexDirection: "row",
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "#000",
		padding: 10,
		marginHorizontal: 15,
		marginTop: 15,
	},
	inputStyle: {
		marginLeft: 10,
		flex: 1,
		fontSize: 18,
	},
});

export default SearchBar;
