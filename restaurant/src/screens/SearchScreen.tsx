import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import SearchBar from "@/components/SearchBar";
import yelp from "@/api/yelp";

const SearchScreen = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchTerm = "pasta") => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "porto",
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	};

	// Call searchApi when component is first rendered
	useEffect(() => {
		searchApi();
	}, []);

	return (
		<View style={styles.container}>
			<SearchBar
				onTermSubmit={() => searchApi(search)}
				searchState={search}
				updateState={setSearch}
			/>
			<View style={{ marginHorizontal: 18, marginTop: 10 }}>
				{results.length > 0 && (
					<Text>We have found {results.length} results: </Text>
				)}

				{errorMessage ? (
					<Text style={styles.errorMessage}>{errorMessage}</Text>
				) : (
					<Text>{search}</Text>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	errorMessage: { color: "red" },
});

export default SearchScreen;
