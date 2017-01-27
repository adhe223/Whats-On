import { combineReducers } from 'redux';
import movieReducer from './title.reducer';

const rootReducer = combineReducers({
    title: titleReducer
});

export default rootReducer;