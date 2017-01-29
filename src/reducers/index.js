import { combineReducers } from 'redux';
import omdbReducer from './omdb.reducer';
import netflixReducer from './netflix.reducer';

const rootReducer = combineReducers({
    omdb: omdbReducer,
    netflix: netflixReducer
});

export default rootReducer;