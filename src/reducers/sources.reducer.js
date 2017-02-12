const sourcesReducer = (state = {}, action) => {
    switch(action.type) {
        case 'STORE_SOURCES':
            if (action.payload)
            {
                return action.payload;
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default sourcesReducer;