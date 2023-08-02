import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

import SearchBar from "@/components/SearchBar";
import useBusinessSearch from "@/hooks/useBusinessSearch";
import { Business } from "@/types/Business";
import ResultList from "@/components/ResultList";

import { NavigationProp } from "react-navigation";

const SearchScreen = ({ navigation }: any) => {
	console.log("SearchScreen props: ", navigation);
	const [search, setSearch] = useState<string>("");
	const [searchApi, results, errorMessage]: [
		(arg0: string) => void,
		Business[],
		string
	] = useBusinessSearch();

	// Call searchApi when component is first rendered
	useEffect(() => {
		searchApi(search);
	}, []);

	return (
		<>
			<SearchBar
				onTermSubmit={() => searchApi(search)}
				searchState={search}
				updateState={setSearch}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ marginHorizontal: 15, marginTop: 10, borderRadius: 10 }}
			>
				{results.length > 0 && (
					<Text>We have found {results.length} results: </Text>
				)}

				{errorMessage ? (
					<Text style={styles.errorMessage}>{errorMessage}</Text>
				) : (
					<Text>{errorMessage}</Text>
				)}
				<ResultList
					title="Cost Effective"
					results={results}
					price="€"
					navigation={navigation}
				/>
				<ResultList
					title="Bit Pricier"
					results={results}
					price="€€"
					navigation={navigation}
				/>
				<ResultList
					title="Big Spender"
					results={results}
					price="€€€"
					navigation={navigation}
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(128,0,0,0.005)",
	},
	errorMessage: { color: "red" },
});

export default SearchScreen;
