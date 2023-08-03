import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

interface PressableIconProps {
	iconName: any;
	_size: number;
	colorPressed: string;
	defaultColor: string;
	style: any;
}

const PressableIcon: React.FC<PressableIconProps> = ({
	iconName,
	_size,
	colorPressed,
	defaultColor,
	style,
}) => {
	const [isIconPressed, setIsIconPressed] = useState(false);

	return (
		<Pressable
			style={style}
			onPress={() => {
				setIsIconPressed(!isIconPressed);
			}}
		>
			<Entypo
				name={iconName}
				size={_size}
				color={isIconPressed ? colorPressed : defaultColor}
			/>
		</Pressable>
	);
};

export default PressableIcon;
