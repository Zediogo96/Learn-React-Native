import React, { useContext, useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import Blog from "@/types/Blog";
import { Context as BlogContext } from "@/context/BlogContext";
import { useNavigation } from "@react-navigation/native";

interface PostScreenProps {
	route: any;
}

const PostScreen: React.FC<PostScreenProps> = ({ route }) => {
	const { state, editBlogPost }: { state: any; editBlogPost: Function } =
		useContext(BlogContext);

	const { id }: { id: number } = route.params;

	const navigation = useNavigation<any>();

	let blogPost: Blog | undefined = state.find((blogPost: Blog) => {
		return blogPost.id === id;
	});

	const [title, setTitle] = useState<string>(blogPost!.title);
	const [content, setContent] = useState<string>(blogPost!.content);

	const handleSubmit = () => {
		editBlogPost(id, title, content);
		navigation.navigate("Home");
	};

	if (!blogPost) {
		// If the blogPost is still undefined, you can show a loading state or an error message here
		return (
			<SafeAreaViewAndroid style={styles.container}>
				<Text>Loading...</Text>
			</SafeAreaViewAndroid>
		);
	}

	return (
		<SafeAreaViewAndroid style={styles.container}>
			{/* Display the blogPost data */}
			<View>
				<Text style={styles.title}> {title} </Text>
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.content}> {content} </Text>
			</View>

			<View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
				<TextInput
					onChangeText={(text) => setTitle(text)}
					value={title}
					style={styles.input}
					placeholder="Title"
				/>
				<TextInput
					multiline
					onChangeText={(text) => setContent(text)}
					value={content}
					style={styles.input}
					placeholder="Content"
				/>

				<TouchableOpacity style={styles.button} onPress={handleSubmit}>
					<Text style={styles.buttonText}>Edit</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaViewAndroid>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	contentContainer: {
		backgroundColor: "rgba(220,220,220, 0.5)",
		marginTop: 10,
		marginHorizontal: 10,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},

	title: {
		fontSize: 35,
		alignSelf: "flex-start",
		marginLeft: 15,
		marginTop: 10,
	},

	content: {
		fontSize: 18,
		marginTop: 10,
	},

	input: {
		width: "90%",
		height: "auto",
		backgroundColor: "rgba(220,220,220, 0.5)",
		borderRadius: 10,
		padding: 10,
		marginTop: 10,
	},

	button: {
		marginTop: 20,
		backgroundColor: "dodgerblue",
		padding: 10,
		borderRadius: 15,
		fontSize: 20,
		width: "50%",
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
	},

	buttonText: {
		color: "white",
		fontSize: 20,
	},
});

export default PostScreen;
