# Section 3: List Building - FlatList

- We are required to pass in a 'prop' of 'data' - the array of data that we are going to create a bunch of elements out of
- We are also required to pass in a 'renderItem' prop - a function that will turn each individual item into an element

## Key Element

- If we don't add a 'key' prop, React will re-render the entire list every time there is a change
- If we add a 'key' prop, React will only re-render the elements that have changed
- Use the 'keyExtractor' prop to tell React what property to use as the key for each item

```js
import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
	const friends = [
		{ name: "John Doe", age: 20 },
		{ name: "Jane Doe", age: 21 },
		{ name: "John Smith", age: 22 },
		{ name: "Jane Smith", age: 23 },
		{ name: "José Diogo", age: 26 },
		{ name: "Diana Meireles", age: 25 },
	];

	return (
		<FlatList
			// Note: 'horizontal' and 'showsHorizontalScrollIndicator' are optional props that you can use if needed
			// horizontal // same as horizontal={true}
			// showsHorizontalScrollIndicator={false} // hide the horizontal scroll bar

			// hides the vertical scroll bar
			showsVerticalScrollIndicator={false}
			// Apply custom styles to the FlatList component
			style={styles.listStyle}
			// keyExtractor is a function that returns a string that will be used as the key for each item in the list
			keyExtractor={(friend) => friend.name}
			// Data to be rendered in the FlatList
			data={friends}
			// Render each item in the FlatList
			renderItem={({ item }) => {
				// Destructure the 'item' object directly to access its properties directly
				const { name, age } = item;
				return (
					// Note: We use JSX comments here for better readability within the JSX code
					<>
						{/* Each friend's name and age */}
						<Text style={styles.textStyle}>
							{name} - Age {age}
						</Text>
						{/* Add any other elements you want to render for each item */}
						{/* For example, you can add a separator between items */}
						<View style={styles.separator} />
					</>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	listStyle: {
		// Add any custom styles for the FlatList component here
	},
	textStyle: {
		fontSize: 18,
		// Add any custom styles for the text here
	},
	separator: {
		height: 1,
		backgroundColor: "gray",
		// Add any custom styles for the separator here
	},
});

export default ListScreen;
```

# Section 4: Navigating Users Between Screens

## Buttons with React Native

### Button

Very simple component for showing a button and detecting a press

### TouchableOpacity

Highly customizable component that can detect a press on just about any kind of element

## Navigatation

- We need:

  - import { createAppContainer } from "react-navigation";
  - import { createStackNavigator } from "react-navigation-stack";

- Inside App.js, we need to create a new component that will be the root of our navigation tree

```js
const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Components: ComponentsScreen,
		List: ListScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);
```

![picture 1](images/1510e5a7bf27af3a610291563c5a07de5f9a4f47691dc789790145c50c1a5cd7.png)

```js
// destructured only navigation from props
const HomeScreen = ({ navigation }) => {
	const handleNavigation = (location) => {
		// this is how we navigate to other screens, the string passed in is the name of the screen,
		// already defined in App.js, similar to Routes in React
		navigation.navigate(location);
	};

	return (
		<View style={styles.view}>
			<Text style={styles.textStyle}>Welcome! </Text>
			<View style={styles.otherView}>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "dodgerblue" }]}
					onPress={() => handleNavigation("List")}
				>
					<Text> Navigate List </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.btnStyle, { backgroundColor: "orange" }]}
					onPress={() => handleNavigation("Components")}
				>
					<Text> Navigate Comp </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30,
	},

	view: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	otherView: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},

	btnStyle: {
		width: 150,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 5,
	},
});
```

# Section 6: State Management in React Components

- props -> system to pass data from a parent component to a child component
- state -> system to track a piece of data that will change over time, if that data changes, our app will re-render

## Notes

- **Never** directly modify a state variable. React won't detect the change and won't re-render the component, use the setter function instead
- When a component is re-rendered, **all it's children are also re-rendered**
- A state variable can be passed to a child component! At that point, the state variable is now being used as props.

## Great use case for useState

- Instead of using multiple state variables, we can use a single state variable that is an object and has multiple properties

```javascript
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
```

```js
const ColorCounter = (props) => {
	const { title, onIncrease, onDecrease, colorValue } = props;

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={{ fontSize: 45 }}>{title}</Text>
			</View>

			<TouchableOpacity
				style={[
					styles.btnStyle,
					{ backgroundColor: "orange", opacity: colorValue === 0 ? 0.5 : 1 },
				]}
				onPress={onDecrease}
				disabled={colorValue === 0}
			>
				<Text style={styles.btnText}> - </Text>
			</TouchableOpacity>

			<Text style={[styles.colorValue, { width: 60 }]}> {colorValue}</Text>

			<TouchableOpacity
				style={[
					styles.btnStyle,
					{ backgroundColor: "green", opacity: colorValue === 255 ? 0.5 : 1 },
				]}
				onPress={onIncrease}
			>
				<Text style={styles.btnText}> + </Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
		marginHorizontal: 20,
	},
	titleContainer: {
		width: 150, // Adjust the width as needed
		marginRight: 20,
	},
	btnStyle: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		marginHorizontal: 5,
	},
	btnText: {
		fontSize: 30,
	},
	colorValue: {
		maringHorizontal: 20,
		fontSize: 30,
	},
});
```
