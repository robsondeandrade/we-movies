import * as zustand from 'zustand'
import { IMovieStoreActions, IMovieStoreState } from './useMoviesStore.types'

export const useMovieStore = zustand.create<IMovieStoreState & IMovieStoreActions>((set) => ({
    movies: [],
    cartItems: [],
    totalAmountDue: 0,

    setMovies: (movies) => set(() => ({ movies })),
    setCartMovies: (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
        set({ cartItems, totalAmountDue: total })
    },
    calculateSubtotal: (item) => {
        return item?.price * item?.quantity
    },
}))
