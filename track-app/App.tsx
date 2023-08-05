import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const _authenticatedFlow = createStackNavigator(
	{
		Register: RegisterScreen,
		Login: LoginScreen,
	},
	{
		headerMode: "none",
	}
);

const _trackListFlow = createStackNavigator(
	{
		TrackList: TrackListScreen,
		TrackDetail: TrackDetailScreen,
	},
	{ headerMode: "none" }
);

const switchNavigator = createSwitchNavigator({
	authenticatedFlow: _authenticatedFlow,

	mainFlow: createMaterialBottomTabNavigator({
		trackListFlow: _trackListFlow,
		CreateTrack: TrackCreateScreen,
		Account: AccountScreen,
	}),
});

export default createAppContainer(switchNavigator);
