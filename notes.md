# Section 3: List Building - FlatList

- We are required to pass in a 'prop' of 'data' - the array of data that we are going to create a bunch of elements out of
- We are also required to pass in a 'renderItem' prop - a function that will turn each individual item into an element

## Key Element

- If we don't add a 'key' prop, React will re-render the entire list every time there is a change
- If we add a 'key' prop, React will only re-render the elements that have changed
- Use the 'keyExtractor' prop to tell React what property to use as the key for each item

```c

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
			// horizontal // same as horizontal={true}
			// showsHorizontalScrollIndicator={false} // hide the horizontal scroll bar
			showsVerticalScrollIndicator={false} // hide the vertical scroll bar
			style={styles.listStyle}
			keyExtractor={(friend) => friend.name} // keyExtractor is a function that returns a string that will be used as the key for each item in the list
			data={friends}
			renderItem={({ item }) => {
				// element === { item: { name: 'John Doe' }, index: 0 }
				// use destructuring to get the object directly =>
				// meaning { element } instead of element
				return (
					<Text style={styles.textStyle}>
						{item.name} - Age {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	listStyle: {},
	textStyle: { marginVertical: 75, marginHorizontal: 5 },
});
```

# Section 4: Navigating Users Between Screens

## Buttons with React Native

### Button

Very simple component for showing a button and detecting a press

### TouchableOpacity

Highly customizable component that can detect a press on just about any kind of element
