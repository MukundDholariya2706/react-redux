import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Spider-man";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const movieText = "Spider-man";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMoviesOrShowDetails = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowDetails",
  async (id) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&i=${id}&plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {},
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {},
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        return { ...state, shows: payload };
      },
    [fetchAsyncMoviesOrShowDetails.fulfilled]: (state, { payload }) => {
        return { ...state, selectedMovieOrShow: payload };
      },
  },
});

export const { addMovies, addShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
