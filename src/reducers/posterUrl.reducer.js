const posterUrlReducer = (state = {}, action) => {
    switch(action.type) {
        case 'STORE_POSTER_URL':
            return action.payload;
        default:
            return state;
    }
};

export default posterUrlReducer;