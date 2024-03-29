import * as zustand from 'zustand'
import { MovieStoreActions, MovieStoreState } from './useMoviesStore.type'

export const useMovieStore = zustand.create<MovieStoreState & MovieStoreActions>((set) => ({
    movies: [],
    cartItems: [],
    setMovies: (movies) => set(() => ({ movies })),
    setCartMovies: (cartItems) => set(() => ({ cartItems })),
}))
