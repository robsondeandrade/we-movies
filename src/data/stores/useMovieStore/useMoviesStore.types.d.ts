import { IMovie } from '@/data/services/MovieService/type'

export interface ICartItem extends IMovie {
    quantity: number
}

export interface IMovieStoreState {
    movies: IMovie[]
    cartItems: ICartItem[]
    totalAmountDue: number
}

export interface IMovieStoreActions {
    setMovies: (movies: Movie[]) => void
    setCartMovies: (cartItems: CartItem[]) => void
    calculateSubtotal: (item: IMovie) => number
}
