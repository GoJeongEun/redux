import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import countertwo from './countertwo';

const rootReducer = combineReducers({
    counter,
    todos,
    countertwo
});

export default rootReducer;