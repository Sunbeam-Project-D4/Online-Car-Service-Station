import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer'; // Example user reducer
import bookingReducer from './reducers/bookingReducer'; // Example booking reducer

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  bookings: bookingReducer,
});

// Create the store without middleware
const store = createStore(rootReducer);

export default store;
