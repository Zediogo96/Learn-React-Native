import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "@/screens/IndexScreen";

import { Provider as BlogProvider } from "@/context/BlogContext";

const navigator = createStackNavigator(
	{
		Home: IndexScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "Blogs",
		},
	}
);

const styles = StyleSheet.create({
	container: {},
});

const App = createAppContainer(navigator);

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
