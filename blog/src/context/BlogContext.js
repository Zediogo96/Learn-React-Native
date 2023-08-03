import createDataContext from "./createDataContext";

const blogsData = [
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

const blogReducer = (state, action) => {
	switch (action.type) {
		// When an "addBlog" action is dispatched, add a new blog post to the state
		case "addBlog":
			return [
				...state,
				{
					id: state.length + 1,
					title: `Blog Post #${state.length + 1}`,
					content: `Blog Post #${state.length + 1} content`,
				},
			];
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return () => {
		// When this action is called, it dispatches an "addBlog" action to the reducer
		dispatch({ type: "addBlog" });
	};
};

// Call the custom context creator with the reducer, actions, and initial state
// Destructure the Context and Provider from the result for later use
export const { Context, Provider } = createDataContext(
	blogReducer, // The reducer function to manage state updates
	{ addBlogPost }, // An object containing action functions (in this case, just one: addBlogPost)
	blogsData // The initial state, which contains an array of blog data
);
