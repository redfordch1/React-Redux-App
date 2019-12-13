import { FETCH_DRINK_START, FETCH_DRINK_SUCCESS, FETCH_DRINK_FAILURE } from '../actions';

const initialState = {
	drink      : [],
	isFetching : false,
	error      : ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DRINK_START:
			return {
				...state,
				isFetching : true
			};
		case FETCH_DRINK_SUCCESS:
			return {
				...state,
				drink      : action.payload,
				isFetching : false,
				error      : ''
			};
		case FETCH_DRINK_FAILURE:
			return {
				...state,
				isFetching : false,
				error      : action.payload
			};
		default:
			return state;
	}
};

export default reducer;
