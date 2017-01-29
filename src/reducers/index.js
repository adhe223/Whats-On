import { combineReducers } from 'redux';
import omdbReducer from './omdb.reducer';
import netflixReducer from './netflix.reducer';
import guideboxReducer from './guidebox.reducer';

const rootReducer = combineReducers({
    omdb: omdbReducer,
    netflix: netflixReducer,
    guidebox: guideboxReducer
});

export default rootReducer;