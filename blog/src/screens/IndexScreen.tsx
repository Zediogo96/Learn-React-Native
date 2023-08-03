import React, { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
	Context as BlogContext,
	Provider as BlogProvider,
} from "../context/BlogContext";
import Blog from "@/types/Blog";
import { Entypo } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowDimensions = Dimensions.get("window");

interface IndexScreenProps {
	route: any;
}

const IndexScreen: React.FC<IndexScreenProps> = ({ route }) => {
	const navigation = useNavigation<any>();

	const {
		state,
		addBlogPost,
		deleteBlogPost,
	}: { state: Blog[]; addBlogPost: Function; deleteBlogPost: Function } =
		useContext(BlogContext);

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					addBlogPost();
				}}
			>
				<Text style={{ fontSize: 20 }}>Add Post</Text>
			</TouchableOpacity>

			<FlatList
				showsVerticalScrollIndicator={false}
				data={state}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.postContainer}>
							<View style={{ flexDirection: "row" }}>
								<Text style={styles.title}>{item.title}</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Entypo
										name="trash"
										size={24}
										color="black"
										style={styles.icon}
									/>
								</TouchableOpacity>
							</View>
							<Text style={styles.content}>{item.content}</Text>

							<TouchableOpacity
								onPress={() => {
									navigation.navigate("PostDetails", { id: item.id });
								}}
							>
								<Text style={{ color: "blue" }}>Read More</Text>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: Platform.OS === "android" ? 40 : 0,
	},

	postContainer: {
		borderBottomWidth: 1,
		borderColor: "gray",
		width: Dimensions.get("window").width * 0.9,
		height: "auto",
		padding: 10,
	},
	title: {
		fontSize: 35,
		width: "90%",
	},
	content: {
		fontSize: 18,
		color: "gray",
		marginVertical: 10,
	},
	button: {
		marginVertical: 20,
		backgroundColor: "dodgerblue",
		padding: 10,
		borderRadius: 5,
		fontSize: 20,
		width: windowDimensions.width * 0.5,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		marginLeft: 10,
		marginTop: 10,
	},
});

export default IndexScreen;
