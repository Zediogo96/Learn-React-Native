import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SafeAreaViewAndroid from "@/components/SafeAreaViewAndroid";
import Blog from "@/types/Blog";
import { Context as BlogContext } from "@/context/BlogContext";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface PostScreenProps {
	route: any;
}

const PostScreen: React.FC<PostScreenProps> = ({ route }) => {
	const { state }: { state: any; getBlogPost: Function } =
		useContext(BlogContext);

	const { id }: { id: number } = route.params;

	const navigation = useNavigation<any>();

	let blogPost: Blog | undefined = state.find((blogPost: Blog) => {
		return blogPost.id === id;
	});

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

			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<Text style={styles.title}>{blogPost.title}</Text>
				<TouchableOpacity
					style={{
						backgroundColor: "rgba(220,220,220, 0.5)",
						borderRadius: 5,
						padding: 5,
						marginTop: 15,
						marginLeft: 10,
					}}
					onPress={() => navigation.navigate("Edit", { id: blogPost?.id })}
				>
					<AntDesign name="edit" size={30} color="black" />
				</TouchableOpacity>
			</View>
			<View style={styles.contentContainer}>
				<Text style={styles.content}>{blogPost.content}</Text>
			</View>
		</SafeAreaViewAndroid>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},

	contentContainer: {
		backgroundColor: "rgba(220,220,220, 0.5)",
		marginLeft: 5,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 5,
	},

	title: {
		fontSize: 35,
		alignSelf: "flex-start",
		marginLeft: 3,
		marginTop: 10,
	},

	content: {
		fontSize: 18,
		marginTop: 10,
	},
});

export default PostScreen;
