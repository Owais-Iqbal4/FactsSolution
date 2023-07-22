import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // import your counter reducer here
import scrollReducer from './scrollReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  scrolling: scrollReducer 
});

export default rootReducer;
