import FloatingLabelInput from "@/components/FloatingLabelInput";
import React, { FC, useState } from "react";
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from "react-native";
import Animated, {
	FlipInYLeft,
	FlipInYRight,
	FadeInRight,
	BounceIn,
} from "react-native-reanimated";

import { useFonts } from "expo-font";
import { Dimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";

const deviceSize = Dimensions.get("window");

import backgroundImage from "@/../assets/background.jpg";
import logo from "@/../assets/ciclist.jpg";
import { ScrollView } from "react-native-gesture-handler";

import {
	increment,
	decrement,
	incrementByAmount,
	setCounter,
} from "@/redux/slices/counterSlice";

interface RegisterScreenProps {
	navigation: any;
}

const RegisterScreen: FC<RegisterScreenProps> = ({ navigation }) => {
	const [loaded] = useFonts({
		"Pacifico-Regular": require("@/../assets/fonts/Pacifico-Regular.ttf"),
	});

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleRegister = () => {};

	if (!loaded) return null;

	return (
		<ScrollView contentContainerStyle={[styles.container]}>
			<View>
				<ImageBackground
					style={{
						width: deviceSize.width,
						height: deviceSize.height,
						flexGrow: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
					source={backgroundImage}
					imageStyle={{ opacity: 0.7, backgroundColor: "#00308F" }}
				>
					<Shadow distance={7} startColor={"rgba(0,0,0,0.7)"}>
						<View style={styles.mainContentContainer}>
							<Shadow distance={7} startColor={"rgba(0,0,0,0.7)"}>
								<Image
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
										value={email}
										width={deviceSize.width * 0.5}
										height={50}
										titleActiveColor="rgb(251,91,9)"
										titleInactiveColor="white"
										handleTextChange={setEmail}
									/>
								</Animated.View>
								<Animated.View entering={FlipInYLeft.delay(400)}>
									<FloatingLabelInput
										value={password}
										label="Password"
										width={deviceSize.width * 0.5}
										height={50}
										titleActiveColor="rgb(251,91,9)"
										titleInactiveColor="white"
										handleTextChange={setPassword}
										hidden={true}
									/>
								</Animated.View>
								<Animated.View entering={FlipInYRight.delay(800)}>
									<FloatingLabelInput
										label="Confirm Password"
										value={confirmPassword}
										width={deviceSize.width * 0.5}
										height={50}
										titleActiveColor="rgb(251,91,9)"
										titleInactiveColor="white"
										hidden={true}
										handleTextChange={setConfirmPassword}
									/>
								</Animated.View>
							</View>

							<Animated.View entering={BounceIn}>
								<TouchableOpacity
									onPress={() => dispatch(increment())}
									style={styles.button}
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

							<View
								style={{
									flexDirection: "row",
									marginTop: 25,
									marginBottom: 10,
								}}
							>
								<Text style={{ color: "white" }}>Already have an account?</Text>
								<TouchableOpacity
									// onPress={() => dispatch(decrement())}
									onPress={() => navigation.navigate("Login")}
									style={{ marginLeft: 5 }}
								>
									<Text style={{ color: "rgb(251,91,9)" }}>Login.</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Shadow>
				</ImageBackground>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
	},

	mainContentContainer: {
		width: deviceSize.width * 0.8,
		height: deviceSize.height * 0.745,
		borderRadius: 15,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 20,
	},

	button: {
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
	},
});

export default RegisterScreen;
