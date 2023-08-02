import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
				<Stack.Screen name="Search" component={SearchScreen} />
				<Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
