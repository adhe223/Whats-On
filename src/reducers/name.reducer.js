const nameReducer = (state = {}, action) => {
    switch(action.type) {
        case 'STORE_MOVIE_NAME':
            return action.payload;
        default:
            return state;
    }
};

export default nameReducer;