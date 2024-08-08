import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './VenueSlice';
import avReducer from './avSlice';
import mealsReducer from './MealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer,
  },
});