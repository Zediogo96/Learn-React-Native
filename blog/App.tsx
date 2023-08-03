import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider as BlogProvider } from "@/context/BlogContext";

import IndexScreen from "@/screens/IndexScreen";
import PostScreen from "@/screens/PostScreen";

type AppStackParamList = {
	Home: undefined;
	PostDetails: { id: number };
};

const Stack = createStackNavigator<AppStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
	{
		name: "Home",
		component: IndexScreen,
	},
	{
		name: "PostDetails",
		component: PostScreen,
	},
];

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={IndexScreen} />
				<Stack.Screen name="PostDetails" component={PostScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
