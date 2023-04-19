import { combineReducers, createStore } from 'redux';
import contactReducer from '../store/reducers/contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer
});

const store = createStore(rootReducer);

export default store;
