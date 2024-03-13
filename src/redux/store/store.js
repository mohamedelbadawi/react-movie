import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../slices/MovieSlice';

export const store = configureStore({
    reducer: {
        movies: movieSlice
    }
});
