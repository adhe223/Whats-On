const omdbReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_OMDB':
            return action.payload.data.Search[0];
        default:
            return state;
    }
};

export default omdbReducer;