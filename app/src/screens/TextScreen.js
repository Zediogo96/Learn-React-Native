import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const TextScreen = () => {
	const [password, setPassword] = useState("");

	return (
		<View>
			<Text> Enter Password: </Text>
			<TextInput
				style={styles.textInput}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
				secureTextEntry={true}
			/>

			{password.length < 4 ? (
				<Text style={{ color: "red", paddingHorizontal: 15 }}>
					Password must be at least 4 characters
				</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
	},
});

export default TextScreen;
