import React, { useState, useRef } from "react";
import { Animated, Easing, TextInput, StyleSheet } from "react-native";

interface FloatingTextInputProps {
	label: string;
	value: string;
	titleActiveSize: number;
	titleInActiveSize: number;
	titleActiveColor: string;
	titleInactiveColor: string;
	width: number;
	height: number;
    style: object;
}

const FlaotingTextInput = ({ ...props }: FloatingTextInputProps) => {
	const {
		label,
		value,
		titleActiveSize,
		titleInActiveSize,
		titleActiveColor,
		titleInactiveColor,
		width,
		height,
        style,
	} = props;

	const [text, onChangeText] = React.useState("");
	const animatedValue = useRef(new Animated.Value(0));

	const returnAnimatedTitleStyles = {
		transform: [
			{
				translateY: animatedValue?.current?.interpolate({
					inputRange: [0, 1],
					outputRange: [22, -4],
					extrapolate: "clamp",
				}),
			},
		],
		fontSize: animatedValue?.current?.interpolate({
			inputRange: [0, 1],
			outputRange: [titleInActiveSize, titleActiveSize],
			extrapolate: "clamp",
		}),
		color: animatedValue?.current?.interpolate({
			inputRange: [0, 1],
			outputRange: [titleInactiveColor, titleActiveColor],
		}),
	};

	const viewStyles = {
		borderBottomColor: animatedValue?.current?.interpolate({
			inputRange: [0, 1],
			outputRange: [titleInactiveColor, titleActiveColor],
		}),
		borderBottomWidth: 0.8,
        width: width,
        height: height,
	};
	const onFocus = () => {
		Animated.timing(animatedValue?.current, {
			toValue: 1,
			duration: 500,
			easing: Easing.bezier(0.4, 0.0, 0.2, 1),
			useNativeDriver: false,
		}).start();
	};

	const onBlur = () => {
		if (!text) {
			Animated.timing(animatedValue?.current, {
				toValue: 0,
				duration: 500,
				easing: Easing.bezier(0.4, 0.0, 0.2, 1),
				useNativeDriver: false,
			}).start();
		}
	};

	return (
		<Animated.View style={[styles.subContainer, viewStyles]}>
			<Animated.Text style={[returnAnimatedTitleStyles]}>{label}</Animated.Text>
			<TextInput
				onChangeText={onChangeText}
				value={text}
				style={styles.textStyle}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	subContainer: {
        // ACCESS WIDTH FROM PROPS HERE?

		marginHorizontal: 24,
	},
	textStyle: {
		paddingBottom: 10,
		fontSize: 16,
	},
});

export default FlaotingTextInput;
