import axios from 'axios';

export const FETCH_DRINK_START = 'FETCH_DRINK_START';
export const FETCH_DRINK_SUCCESS = 'FETCH_DRINK_SUCCESS';
export const FETCH_DRINK_FAILURE = 'FETCH_DRINK_FAILURE';

export const getDrink = () => (dispatch) => {
	dispatch({ type: FETCH_DRINK_START });
	axios
		.get('https://api.punkapi.com/v2/beers/random')
		.then((response) => {
			console.log(response.data);
			dispatch({ type: FETCH_DRINK_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: FETCH_DRINK_FAILURE, payload: err.response });
		});
};
