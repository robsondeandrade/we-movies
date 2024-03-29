export interface Movie {
    id: number
    title: string
}

export interface CartItem extends Movie {
    quantity: number
}

export interface MovieStoreState {
    movies: Movie[]
    cartItems: CartItem[]
}

export interface MovieStoreActions {
    setMovies: (movies: Movie[]) => void
    setCartMovies: (cartItems: CartItem[]) => void
}
