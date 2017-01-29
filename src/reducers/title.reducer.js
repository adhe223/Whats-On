const titleReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TITLE':
            return action.payload.data;
        default:
            return state;
    }
};

export default titleReducer;