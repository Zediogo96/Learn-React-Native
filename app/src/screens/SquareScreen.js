import React, { useState } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";

import { Dimensions } from "react-native";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
	const [colors, setColors] = useState({ red: 128, green: 128, blue: 255 });

	const { red, green, blue } = colors;

	const updateColor = (color, isIncrement) => {
		const step = isIncrement ? COLOR_INCREMENT : -1 * COLOR_INCREMENT;

		setColors({
			...colors,
			[color]: Math.min(Math.max(colors[color] + step, 0), 255),
		});
	};

	return (
		<View>
			<ColorCounter
				title="Red"
				onIncrease={() => updateColor("red", true)}
				onDecrease={() => updateColor("red", false)}
				colorValue={red}
			/>
			<ColorCounter
				title="Green"
				onIncrease={() => updateColor("green", true)}
				onDecrease={() => updateColor("green", false)}
				colorValue={green}
			/>
			<ColorCounter
				title="Blue"
				onIncrease={() => updateColor("blue", true)}
				onDecrease={() => updateColor("blue", false)}
				colorValue={blue}
			/>

			<View
				style={{
					width: Dimensions.get("window").width * 0.8,
					height: Dimensions.get("window").height * 0.3,
					marginHorizontal: Dimensions.get("window").width * 0.1,
					marginVertical: Dimensions.get("window").height * 0.05,
					backgroundColor: `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
					borderRadius: 20,
				}}
			/>
		</View>
	);
};



export default SquareScreen;
