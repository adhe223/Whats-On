const guideboxReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_GUIDEBOX':
            if (action.payload)
            {
                return action.payload.data;
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default guideboxReducer;