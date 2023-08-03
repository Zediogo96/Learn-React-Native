import createDataContext from "./createDataContext";
import Blog from "@/types/Blog"

import jsonServer from "../api/jsonServer";
import axios from "axios";

const blogsData : Blog[] = [
	{
		id: 1,
		title: "Introduction to React Hooks",
		content:
			"React Hooks are a powerful feature in React that allows you to use state and other React features in functional components.",
	},
	{
		id: 2,
		title: "Mastering CSS Flexbox",
		content:
			"CSS Flexbox is a layout model that provides a more efficient way to arrange and align items within containers.",
	},
	{
		id: 3,
		title: "The Art of Web Accessibility",
		content:
			"Web Accessibility is about making websites and web applications accessible to all users, including those with disabilities.",
	},
	{
		id: 4,
		title: "Machine Learning: An Introduction",
		content:
			"Machine learning is a subset of artificial intelligence that enables systems to learn from data and improve their performance over time.",
	},
	{
		id: 5,
		title: "Building Scalable Web Applications with Node.js",
		content:
			"Node.js is a popular platform for building scalable and high-performance web applications using JavaScript on the server-side.",
	},
];

const blogReducer = (state: Blog[], action: { type: string; payload?: any }) => {
	
	switch (action.type) {

		case "getBlogPosts":
			return action.payload;
		// When an "addBlog" action is dispatched, add a new blog post to the state
		case "addBlog":
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: action.payload.title,
					content: action.payload.content,
				},
			];
		case "deleteBlog":
			return state.filter((blog) => blog.id !== action.payload);
		case "editBlog":
			return state.map((blog) => {
				return blog.id === action.payload.id ? { ...blog, title: action.payload.title, content: action.payload.content } : blog;
			});
		default:
			return state;
	}
};

const getBlogPosts = (dispatch : any) => {
	return async () => {
		// response === [{}, {}, {}]
		const response = await jsonServer.get("/blogposts");
		dispatch({ type: "getBlogPosts", payload: response.data });
	};
};
		

const addBlogPost = (dispatch : any) => {
	return async (title : string, content : string, callback : Function) => {
		await jsonServer.post("/blogposts", { title, content });
		dispatch({ type: "addBlog", payload: { title, content } });
	}
};

const deleteBlogPost = (dispatch : any) => {
	return async (id : number) => {
		await jsonServer.delete(`/blogposts/${id}`);
		dispatch({ type: "deleteBlog", payload: id });
	};
};

const editBlogPost = (dispatch : any) => {
	return async (id : number, title : string, content : string, callback : Function) => {
		await jsonServer.put(`/blogposts/${id}`, { title, content });
		dispatch({ type: "editBlog", payload: { id, title, content } });
		if (callback) callback();
	};
};


// Call the custom context creator with the reducer, actions, and initial state
// Destructure the Context and Provider from the result for later use
export const { Context, Provider } = createDataContext(
	blogReducer, // The reducer function to manage state updates
	{ getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost }, // An object containing action functions (in this case, just one: addBlogPost)
	[] // The initial state, which contains an array of blog data
);
