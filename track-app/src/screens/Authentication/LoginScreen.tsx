import FloatingLabelInput from "@/components/FloatingLabelInput";
import React, { FC, useState } from "react";
import {
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
import { Text, Input, Button } from "react-native-elements";

import { useFonts } from "expo-font";
import { Dimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";

const deviceSize = Dimensions.get("window");

import backgroundImage from "@/../assets/background.jpg";
import logo from "@/../assets/ciclist.jpg";

// redux related
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slices/authSlice";

interface LoginScreenProps {
	navigation: any;
}

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { loading, user, error, success } = useSelector(
		(state: any) => state.auth
	);

	console.log(loading, user, error, success);

	const dispatch = useDispatch();

	const handleLogin = () => {
		// @ts-ignore
		dispatch(loginUser({ email, password }));
	};

	const [loaded] = useFonts({
		"Pacifico-Regular": require("@/../assets/fonts/Pacifico-Regular.ttf"),
	});

	if (!loaded) return null;

	return (
		<ImageBackground
			source={backgroundImage}
			imageStyle={{ opacity: 0.7, backgroundColor: "#00308F" }}
			style={styles.container}
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
						LOGIN
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
								handleTextChange={(text) => setEmail(text)}
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
								handleTextChange={(text) => setPassword(text)}
							/>
						</Animated.View>
					</View>

					<Animated.View entering={BounceIn}>
						<TouchableOpacity
							onPress={handleLogin}
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
								Login
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
						<Text style={{ color: "white" }}>Don't have an account?</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate("Register")}
							style={{ marginLeft: 5 }}
						>
							<Text style={{ color: "rgb(251,91,9)" }}> Signup.</Text>
						</TouchableOpacity>
					</View>
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

export default LoginScreen;
