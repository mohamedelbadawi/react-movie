
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initState = {
    allMovies: [],
    pageCount: 0,
    isLoading: false,
    movie: {}
}

export const getAllMovies = createAsyncThunk('movies/getAll', async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")

    return res.data

})

export const getMovieDetails = createAsyncThunk('movies/getMovieDetails', async (id) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
    return res.data
})

export const getPage = createAsyncThunk('movies/getMoviesPage', async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    return res.data
})

export const search = createAsyncThunk('movies/search', async (word) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
    return res.data
})

const movieSlice = createSlice({
    name: 'movies',
    initialState: initState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllMovies.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
            state.allMovies = action.payload.results
            state.pageCount = action.payload.total_pages
            state.isLoading = false;
        })
        builder.addCase(getMovieDetails.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getMovieDetails.fulfilled, (state, action) => {
            state.movie = action.payload
        })

        builder.addCase(getPage.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getPage.fulfilled, (state, action) => {
            state.allMovies = action.payload.results
            state.pageCount = action.payload.total_pages
            state.isLoading = false;
        })
        builder.addCase(search.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(search.fulfilled, (state, action) => {
            state.allMovies = action.payload.results
            state.pageCount = action.payload.total_pages
            state.isLoading = false;
        })


    }
});


export default movieSlice.reducer