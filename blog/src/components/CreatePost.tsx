import React, { useContext, useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

import { Context as BlogContext } from "@/context/BlogContext";

interface CreatePostProps {
	scroll_to_end: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ scroll_to_end }) => {
	const { state, addBlogPost } = useContext(BlogContext);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = () => {
		console.log(title, content);
		if (!title || !content) setError("Please enter a title and content");
		else {
			addBlogPost(title, content);
			setTitle("");
			setContent("");
			setError("");
			scroll_to_end();
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create Post</Text>
			<TextInput
				value={title}
				onChange={(e) => setTitle(e.nativeEvent.text)}
				style={styles.input}
				placeholder="Title"
			/>
			<TextInput
				value={content}
				onChange={(e) => setContent(e.nativeEvent.text)}
				style={styles.input}
				placeholder="Content"
			/>

			{error && <Text style={{ color: "red", marginTop: 2 }}>{error}</Text>}

			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Create</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		width: "90%",
		borderBottomWidth: 1,
		borderColor: "gray",
		marginBottom: 10,
	},

	title: {
		fontSize: 35,
		alignSelf: "flex-start",
		marginLeft: 5,
		marginTop: 10,
	},

	input: {
		width: "90%",
		height: 50,
		backgroundColor: "rgba(220,220,220, 0.5)",
		borderRadius: 10,
		paddingLeft: 10,
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

export default CreatePost;
