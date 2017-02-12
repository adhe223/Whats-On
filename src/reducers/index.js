import { combineReducers } from 'redux';
import sourcesReducer from './sources.reducer';
import posterUrlReducer from './posterUrl.reducer';
import nameReducer from './name.reducer';

const rootReducer = combineReducers({
    sources: sourcesReducer,
    posterUrl: posterUrlReducer,
    name: nameReducer
});

export default rootReducer;