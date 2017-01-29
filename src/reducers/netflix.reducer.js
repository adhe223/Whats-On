const netflixReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_NETFLIX':
            return action.payload.data;
        default:
            return state;
    }
};

export default netflixReducer;