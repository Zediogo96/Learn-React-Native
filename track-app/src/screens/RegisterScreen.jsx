import FloatingLabelInput from "@/components/FloatingLabelInput";
import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from "react-native";

import { useFonts } from "expo-font";

import { Dimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Animated, {
	FlipInYLeft,
	FlipInYRight,
	FadeInRight,
	BounceIn,
	useSharedValue,
} from "react-native-reanimated";

const deviceSize = Dimensions.get("window");

import backgroundImage from "@/../assets/background.jpg";
import logo from "@/../assets/ciclist.jpg";

const RegisterScreen = ({ navigation }) => {
	const [loaded] = useFonts({
		"Pacifico-Regular": require("@/../assets/fonts/Pacifico-Regular.ttf"),
	});

	if (!loaded) {
		return null;
	}

	return (
		<ImageBackground
			source={backgroundImage}
			imageStyle={{ opacity: 0.7, backgroundColor: "#00308F" }}
			style={styles.container}
		>
			<Shadow distance={7} startColor={"rgba(0,0,0,0.7)"}>
				<View style={styles.mainContentContainer}>
					<Shadow distance={7} startColor={"rgba(0,0,0,0.7)"}>
						<Animated.Image
							entering={FlipInYLeft}
							source={logo}
							style={{
								width: deviceSize.width * 0.7,
								height: deviceSize.width * 0.4,
								marginBottom: 30,
								borderRadius: 10,
							}}
						/>
					</Shadow>
					<Animated.Text
						entering={FadeInRight}
						style={{
							fontSize: 35,
							color: "rgb(251,91,9)",
							fontFamily: "Pacifico-Regular",
						}}
					>
						REGISTER
					</Animated.Text>

					<View style={{ marginVertical: 30, rowGap: 20 }}>
						<Animated.View entering={FlipInYRight}>
							<FloatingLabelInput
								label="Email"
								width={deviceSize.width * 0.5}
								height={50}
								titleActiveColor="rgb(251,91,9)"
								titleInactiveColor="white"
							/>
						</Animated.View>
						<Animated.View entering={FlipInYLeft}>
							<FloatingLabelInput
								label="Password"
								width={deviceSize.width * 0.5}
								height={50}
								titleActiveColor="rgb(251,91,9)"
								titleInactiveColor="white"
							/>
						</Animated.View>
						<Animated.View entering={FlipInYRight}>
							<FloatingLabelInput
								label="Confirm Password"
								width={deviceSize.width * 0.5}
								height={50}
								titleActiveColor="rgb(251,91,9)"
								titleInactiveColor="white"
							/>
						</Animated.View>
					</View>

					<Animated.View entering={BounceIn}>
						<TouchableOpacity
							style={{
								backgroundColor: "rgb(251,91,9)",
								width: deviceSize.width * 0.35,
								height: 50,
								borderRadius: 10,
								justifyContent: "center",
								alignItems: "center",
								marginRight: 10,
								marginTop: 20,
								borderWidth: 1.5,
								borderColor: "rgb(0,63,92)",
							}}
						>
							<Text
								style={{
									color: "rgb(0,63,92)",
									fontSize: 20,
									fontWeight: "bold",
								}}
							>
								Register
							</Text>
						</TouchableOpacity>
					</Animated.View>
				</View>
			</Shadow>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	innerContainer: {
		flexDirection: "column",
		width: deviceSize.width * 0.9,
		height: deviceSize.height * 0.8,
		backgroundColor: "rgba(0, 48, 143, 0.8)",
		padding: 15,
		borderRadius: 15,
		alignItems: "center",
		paddingTop: 25, // this is responsible for moving the topButtonsContainer, otherwise it would break Shadow component
	},

	mainContentContainer: {
		width: deviceSize.width * 0.8,
		height: deviceSize.height * 0.745,
		borderRadius: 15,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default RegisterScreen;
