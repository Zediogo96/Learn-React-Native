import { useState, useEffect } from 'react';
import { Business } from '@/types/Business';
import yelp from '@/api/yelp';

const useBusinessSearch = () : [() => Promise<void>, Business[], string] => {
    const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchTerm: string = "pasta") => {
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "porto",
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	}

	// Call searchApi when component is first rendered
	useEffect(() => {
		searchApi();
	}, []);

    return [searchApi, results, errorMessage];
};

export default useBusinessSearch;