import axios from 'axios';
import type { Movie } from '../types/movie';

export interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies(
  query: string,
  page: number
): Promise<FetchMoviesResponse> {
  if (!API_KEY) {
    throw new Error('TMDB API key is missing. Please check your environment variables.');
  }

  const response = await axios.get<FetchMoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: 'en-US',
      page,
      api_key: API_KEY,
    },
  });

  return response.data;
}