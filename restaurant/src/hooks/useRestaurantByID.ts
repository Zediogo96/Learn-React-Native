import { useState, useEffect } from 'react';
import { Business } from '@/types/Business';
import yelp from '@/api/yelp';

import { Platform } from 'react-native';

const useRestaurantByID = () : [(arg0: string) => Promise<void>, Business, string] => {
    const [result, setResults] = useState({} as Business);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (searchID: string) => {
		try {
			const response = await yelp.get(`/${searchID}`, {
				params: {
					locale: "pt_PT",
					device_platform: Platform.OS
				},
			});
			setResults(response.data);
		} catch (err) {
			setErrorMessage("Something went wrong");
		}
	}

	// Call searchApi when component is first rendered
	// useEffect(() => {
	// 	searchApi(searchID);
	// }, []);

    return [searchApi, result, errorMessage];
};

export default useRestaurantByID;