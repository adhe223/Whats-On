import { combineReducers } from 'redux';
import titleReducer from './title.reducer';

const rootReducer = combineReducers({
    title: titleReducer
});

export default rootReducer;