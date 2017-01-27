const titleReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_TITLE':
            return action.payload;
    }

    return state;
};

export default titleReducer;